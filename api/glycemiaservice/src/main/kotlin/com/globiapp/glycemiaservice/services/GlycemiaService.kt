package com.globiapp.glycemiaservice.services

import com.globiapp.glycemiaservice.db.Glycemia
import com.globiapp.glycemiaservice.db.GlycemiaRepository
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.stereotype.Service
import org.springframework.util.ObjectUtils
import java.time.OffsetDateTime

@Service
class GlycemiaService(val glycemiaRepository: GlycemiaRepository) {

    private val logger: Logger = LogManager.getLogger(GlycemiaService::class.java)

    fun registerGlycemia(glycemia: Glycemia): Glycemia {
        logger.info("GlycemiaService.registerGlycemia - initializing register of glycemia")
        if (ObjectUtils.isEmpty(glycemia.glycemicIndex) || ObjectUtils.isEmpty(glycemia.data))
            throw Exception("Glycemic index cannot be empty")
        if (glycemia.glycemicIndex > 999) throw Exception("Invalid glycemic index, please type again")
        if (glycemia.data.isAfter(OffsetDateTime.now())) throw Exception("Invalid data, please type again")
        val glycemiaResponse = glycemiaRepository.save(glycemia)
        logger.info("GlycemiaService.registerGlycemia - finishing register of glycemia")
        return glycemiaResponse
    }
}