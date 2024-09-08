package com.globiapp.glycemiaservice.exceptions

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import java.time.LocalDateTime

@ControllerAdvice
class ExceptionControllerAdvice {

    @ExceptionHandler(CustomException::class)
    fun handleCustomException(exception: CustomException): ResponseEntity<ErrorResponse> {
        val errorResponse = ErrorResponse(
            httpStatus = exception.httpStatus,
            date = exception.date,
            message = exception.message
        )
        return ResponseEntity.status(exception.httpStatus).body(errorResponse)
    }

    @ExceptionHandler(HttpMessageNotReadableException::class)
    fun handleHttpMessageNotReadable(exception: HttpMessageNotReadableException): ResponseEntity<ErrorResponse> {
        val errorResponse = ErrorResponse(
            httpStatus = HttpStatus.BAD_REQUEST,
            date = LocalDateTime.now(),
            message = exception.localizedMessage
        )
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse)
    }
}