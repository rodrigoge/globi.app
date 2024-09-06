package com.globiapp.glycemiaservice.exceptions

import org.springframework.http.HttpStatus
import java.time.LocalDateTime

class CustomException(
    val httpStatus: HttpStatus,
    val date: LocalDateTime,
    override val message: String
) : RuntimeException(message)