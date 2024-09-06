package com.globiapp.glycemiaservice.exceptions

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class ExceptionControllerAdvice {

    @ExceptionHandler(CustomException::class)
    fun handleCustomException(exception: CustomException): ResponseEntity<ErrorResponse> {
        val errorResponse = ErrorResponse(
            httpStatus = exception.httpStatus,
            date = exception.date,
            message = exception.message
        )
        return ResponseEntity
            .status(exception.httpStatus)
            .body(errorResponse)
    }
}