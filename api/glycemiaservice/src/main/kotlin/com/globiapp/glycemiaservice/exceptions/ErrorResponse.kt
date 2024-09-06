package com.globiapp.glycemiaservice.exceptions

import org.springframework.http.HttpStatus
import java.time.LocalDateTime

data class ErrorResponse(
    val httpStatus: HttpStatus,
    val date: LocalDateTime,
    val message: String
)
