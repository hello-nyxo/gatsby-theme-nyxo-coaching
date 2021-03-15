import React, { FC } from "react"
import styled, { css, CSSProperties, keyframes } from "styled-components"

type Props = {
  isLoading: boolean
  style?: CSSProperties
  className?: string
}

export const SkeletonText: FC<Props> = ({
  isLoading,
  children,
  style,
  className,
}) => {
  return (
    <Span className={className} style={style} isLoading={isLoading}>
      {children}
    </Span>
  )
}

const shimmer = keyframes`
    100% {
        transform: translateX(100%);
    }
`

const Span = styled.span<Props>`
  ${({ isLoading }) =>
    isLoading
      ? css`
          position: relative;
          display: inline-block;
          overflow: hidden;

          &:before {
            border-radius: 0.2rem;
            background-color: #dddbdd;
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          &:after {
            animation: ${shimmer} 2.5s infinite;
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0,
              rgba(255, 255, 255, 0.2) 20%,
              rgba(255, 255, 255, 0.5) 60%,
              rgba(255, 255, 255, 0)
            );
          }
        `
      : css``}
`
