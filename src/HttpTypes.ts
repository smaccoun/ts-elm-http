/** Response Types **/

export interface HttpResponse {
    url: string
    status: Status
}

interface Status {
    code: number
    message: string
}

/** Error Types **/

export type HttpError =
      NetworkError
    | TimeOut
    | BadStatus

export enum RemoteErrorC {
    NETWORK_ERROR = 'NETWORK_ERROR',
    TIMEOUT = 'TIMEOUT',
    BAD_STATUS = 'BAD_STATUS'
}

interface BadStatus {
    type: RemoteErrorC.BAD_STATUS
    response: HttpResponse
}

interface NetworkError {
    type: RemoteErrorC.NETWORK_ERROR
}

interface TimeOut {
    type: RemoteErrorC.TIMEOUT
}

