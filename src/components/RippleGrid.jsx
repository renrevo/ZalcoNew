import React, { useState, useEffect, useRef, useCallback } from 'react';
import './RippleGrid.css';

export default function RippleGrid({ interactive = true }) {
    const containerRef = useRef(null);
    const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });
    const isReady = useRef(false);
    const cooldowns = useRef(new Map());

    useEffect(() => {
        const updateGrid = () => {
            if (containerRef.current && containerRef.current.parentElement) {
                const width = containerRef.current.parentElement.clientWidth;
                const height = containerRef.current.parentElement.clientHeight;
                const size = 64; // Grid cell size in pixels
                const columns = Math.ceil(width / size);
                const rows = Math.ceil(height / size);
                setGridSize({ columns, rows });
                isReady.current = true;
            }
        };

        // Delay starting calculation until container has dimensions
        const timeout = setTimeout(updateGrid, 100);
        window.addEventListener('resize', updateGrid);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', updateGrid);
        };
    }, []);

    const handleClick = useCallback((index) => {
        if (!isReady.current || !containerRef.current) return;

        const now = Date.now();
        if (cooldowns.current.has(index)) {
            // Prevent same cell triggering multiple times consecutively too fast
            if (now - cooldowns.current.get(index) < 500) return;
        }
        cooldowns.current.set(index, now);

        const col = index % gridSize.columns;
        const row = Math.floor(index / gridSize.columns);
        const elements = containerRef.current.children;

        const maxRadius = Math.max(gridSize.columns, gridSize.rows); // Spread across the whole grid

        const startCol = Math.max(0, col - maxRadius);
        const endCol = Math.min(gridSize.columns - 1, col + maxRadius);
        const startRow = Math.max(0, row - maxRadius);
        const endRow = Math.min(gridSize.rows - 1, row + maxRadius);

        for (let r = startRow; r <= endRow; r++) {
            for (let c = startCol; c <= endCol; c++) {
                // Determine distance (Circular pattern)
                const distance = Math.sqrt(Math.pow(c - col, 2) + Math.pow(r - row, 2));

                const targetIndex = r * gridSize.columns + c;
                const el = elements[targetIndex];
                if (el) {
                    setTimeout(() => {
                        el.classList.add('ripple-active');
                        // Quick pulse of the class, CSS transition takes care of the fade out
                        setTimeout(() => {
                            el.classList.remove('ripple-active');
                        }, 100);
                    }, distance * 30); // Speed of ripple effect
                }
            }
        }
    }, [gridSize]);

    const totalCells = gridSize.columns * gridSize.rows;

    return (
        <div className={`ripple-grid-wrapper ${interactive ? 'interactive' : ''}`} aria-hidden="true">
            <div
                ref={containerRef}
                className="ripple-grid"
                style={{
                    gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                }}
            >
                {totalCells > 0 && Array.from({ length: totalCells }).map((_, i) => (
                    <div
                        key={i}
                        className="ripple-grid-cell"
                        onClick={interactive ? () => handleClick(i) : undefined}
                    />
                ))}
            </div>
            <div className="ripple-grid-mask"></div>
        </div>
    );
}
