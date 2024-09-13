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
import java.time.ZonedDateTime

@Service
class GlycemiaService(val glycemiaRepository: GlycemiaRepository) {

    private val logger: Logger = LogManager.getLogger(GlycemiaService::class.java)

    fun registerGlycemia(glycemia: Glycemia): Glycemia {
        logger.info("GlycemiaService.registerGlycemia - initializing register of glycemia")
        if (ObjectUtils.isEmpty(glycemia.glycemicIndex) || ObjectUtils.isEmpty(glycemia.creationDate))
            throw CustomException(HttpStatus.BAD_REQUEST, LocalDateTime.now(), "Glycemic index cannot be empty")
        if (glycemia.glycemicIndex > 999)
            throw CustomException(
                HttpStatus.BAD_REQUEST,
                LocalDateTime.now(),
                "Invalid glycemic index, please type again"
            )
        if (glycemia.creationDate.isAfter(ZonedDateTime.now()))
            throw CustomException(HttpStatus.BAD_REQUEST, LocalDateTime.now(), "Invalid date, please type again")
        val glycemiaResponse = glycemiaRepository.save(glycemia)
        logger.info("GlycemiaService.registerGlycemia - finishing register of glycemia")
        return glycemiaResponse
    }

    fun getGlycemias(date: OffsetDateTime): List<Glycemia> {
        logger.info("GlycemiaService.getGlycemias - initializing get glycemias")
        if (date.isAfter(OffsetDateTime.now()))
            throw CustomException(HttpStatus.BAD_REQUEST, LocalDateTime.now(), "Invalid date, please type again")
        val startOfDay = date.withHour(0).withMinute(0).withSecond(0).withNano(0)
        val endOfDay = date.withHour(23).withMinute(59).withSecond(59).withNano(999999999)
        val glycemiasResponse = glycemiaRepository.findAllByCreationDateBetween(startOfDay, endOfDay)
        logger.info("GlycemiaService.getGlycemias - finishing get glycemias")
        return glycemiasResponse
    }
}