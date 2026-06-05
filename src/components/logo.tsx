import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            className={cn('text-foreground h-6 w-full', className)}
            viewBox="0 0 220 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Outer orbit ring */}
            <circle
                cx="14"
                cy="14"
                r="12"
                stroke={uniColor ? 'currentColor' : 'url(#orbit_grad)'}
                strokeWidth="2.5"
                fill="none"
            />
            {/* Inner orbit ring */}
            <circle
                cx="14"
                cy="14"
                r="7"
                stroke={uniColor ? 'currentColor' : 'url(#orbit_grad_rev)'}
                strokeWidth="2"
                fill="none"
            />
            {/* Center star / payment dot */}
            <path
                d="M14 5L15.5 10.5L14 12L12.5 10.5Z"
                fill={uniColor ? 'currentColor' : 'url(#orbit_grad)'}
            />
            <circle
                cx="14"
                cy="14"
                r="2.5"
                fill={uniColor ? 'currentColor' : 'url(#orbit_grad_rev)'}
            />
            {/* Orbiting path accent */}
            <path
                d="M22 6C24.5 8.5 26 11.5 26 14C26 16.5 24.5 19.5 22 22"
                stroke={uniColor ? 'currentColor' : 'url(#orbit_grad)'}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <text
                x="36"
                y="28"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="18"
                fontWeight="700"
                letterSpacing="-0.5"
                fill={uniColor ? 'currentColor' : '#ffffff'}>
                OrbitPay
            </text>
            <defs>
                <linearGradient
                    id="orbit_grad"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5A623" />
                    <stop offset="1" stopColor="#4A90D9" />
                </linearGradient>
                <linearGradient
                    id="orbit_grad_rev"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#06d6a0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            className={cn('size-6', className)}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Outer orbit ring */}
            <circle
                cx="16"
                cy="16"
                r="13"
                stroke={uniColor ? 'currentColor' : 'url(#orbit_icon_grad)'}
                strokeWidth="2.5"
                fill="none"
            />
            {/* Inner orbit ring */}
            <circle
                cx="16"
                cy="16"
                r="7.5"
                stroke={uniColor ? 'currentColor' : 'url(#orbit_icon_grad_rev)'}
                strokeWidth="2"
                fill="none"
            />
            {/* Center star / payment dot */}
            <path
                d="M16 5L17.8 12L16 13.5L14.2 12Z"
                fill={uniColor ? 'currentColor' : 'url(#orbit_icon_grad)'}
            />
            <circle
                cx="16"
                cy="16"
                r="2.5"
                fill={uniColor ? 'currentColor' : 'url(#orbit_icon_grad_rev)'}
            />
            {/* Orbiting path accent */}
            <path
                d="M25 7C28 10 29.5 14 29.5 16C29.5 18 28 22 25 25"
                stroke={uniColor ? 'currentColor' : 'url(#orbit_icon_grad)'}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <defs>
                <linearGradient
                    id="orbit_icon_grad"
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5A623" />
                    <stop offset="1" stopColor="#4A90D9" />
                </linearGradient>
                <linearGradient
                    id="orbit_icon_grad_rev"
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#06d6a0" />
                </linearGradient>
            </defs>
        </svg>
    )
}
