import React, { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
// eslint-disable-next-line unused-imports/no-unused-imports-ts
import { ReactQueryDevtools } from "react-query/devtools"
import { Toaster } from "react-hot-toast"
import styled from "styled-components"

export const queryClient = new QueryClient()

type Props = {
  element: React.ReactElement
}

export const wrapRootElement: FC<Props> = ({ element }) => {
  return (
    <>
      <StyledToaster position="bottom-right" />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {element}
      </QueryClientProvider>
    </>
  )
}

const StyledToaster = styled(Toaster).attrs(({ theme }) => ({
  toastOptions: {
    style: {
      backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    },
  },
}))``
