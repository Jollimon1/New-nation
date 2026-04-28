"use client"

import React, { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"
import { Smartphone } from "lucide-react"

interface AnalyticsMarker {
  id: string
  location: [number, number]
  price: number
  demand: number
  device: string
}

interface GlobeAnalyticsProps {
  markers?: AnalyticsMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: AnalyticsMarker[] = [
  { id: "vis-1", location: [40.71, -74.01], price: 847, demand: 92, device: "iPhone 15" },
  { id: "vis-2", location: [51.51, -0.13], price: 623, demand: 85, device: "iPad Air" },
  { id: "vis-3", location: [35.68, 139.65], price: 412, demand: 78, device: "S23 Ultra" },
  { id: "vis-4", location: [48.86, 2.35], price: 385, demand: 65, device: "Pixel 8" },
  { id: "vis-5", location: [-33.87, 151.21], price: 201, demand: 45, device: "Watch S9" },
  { id: "vis-6", location: [52.52, 13.41], price: 178, demand: 30, device: "MacBook M3" },
]

export function GlobeAnalytics({
  markers: initialMarkers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobeAnalyticsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const [data, setData] = useState(initialMarkers)

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((m) => ({
          ...m,
          price: m.price + Math.floor(Math.random() * 5) - 2,
          demand: Math.max(10, Math.min(100, m.demand + Math.floor(Math.random() * 3) - 1)),
        }))
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0, 0.87, 0.51], // Circuit Green
        glowColor: [1, 0.42, 0], // Electric Orange
        markerElevation: 0,
        markers: initialMarkers.map((m) => ({ location: m.location, size: 0.04, id: m.id })),
        arcs: [],
        arcColor: [0.25, 0.9, 0.5],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.7,
      } as any) // Cast to any to avoid lint errors with onRender or other properties if they differ from types
      
      function animate() {
        if (!isPausedRef.current) phi += speed
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [initialMarkers, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%", height: "100%", cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none",
        }}
      />
      {data.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            marginBottom: 6,
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
            padding: "0.4rem 0.6rem",
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(0,223,129,0.2)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            borderRadius: 8,
            pointerEvents: "none" as const,
            whiteSpace: "nowrap" as const,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.3s, filter 0.3s",
            zIndex: 50,
          }}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <Smartphone size={10} className="text-r3up-orange" />
            <span className="text-[9px] font-bold text-zinc-900 uppercase tracking-tighter">{m.device}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[8px] text-zinc-400 uppercase font-mono">Price</span>
              <span className="text-[11px] font-bold text-zinc-900 font-mono">${m.price}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] text-zinc-400 uppercase font-mono">Demand</span>
              <span className="text-[11px] font-bold text-r3up-green font-mono">{m.demand}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
