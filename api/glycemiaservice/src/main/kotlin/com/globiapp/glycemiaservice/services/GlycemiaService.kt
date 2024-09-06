package com.globiapp.glycemiaservice.services

import com.globiapp.glycemiaservice.db.Glycemia
import com.globiapp.glycemiaservice.db.GlycemiaRepository
import com.globiapp.glycemiaservice.exceptions.CustomException
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.util.ObjectUtils
import java.time.LocalDateTime
import java.time.OffsetDateTime

@Service
class GlycemiaService(val glycemiaRepository: GlycemiaRepository) {

    private val logger: Logger = LogManager.getLogger(GlycemiaService::class.java)

    fun registerGlycemia(glycemia: Glycemia): Glycemia {
        logger.info("GlycemiaService.registerGlycemia - initializing register of glycemia")
        if (ObjectUtils.isEmpty(glycemia.glycemicIndex) || ObjectUtils.isEmpty(glycemia.data))
            throw CustomException(HttpStatus.BAD_REQUEST, LocalDateTime.now(), "Glycemic index cannot be empty")
        if (glycemia.glycemicIndex > 999)
            throw CustomException(
                HttpStatus.BAD_REQUEST,
                LocalDateTime.now(),
                "Invalid glycemic index, please type again"
            )
        if (glycemia.data.isAfter(OffsetDateTime.now()))
            throw CustomException(HttpStatus.BAD_REQUEST, LocalDateTime.now(), "Invalid data, please type again")
        val glycemiaResponse = glycemiaRepository.save(glycemia)
        logger.info("GlycemiaService.registerGlycemia - finishing register of glycemia")
        return glycemiaResponse
    }
}