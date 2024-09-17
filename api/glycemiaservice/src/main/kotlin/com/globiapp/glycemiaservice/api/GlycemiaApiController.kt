package com.globiapp.glycemiaservice.api

import com.globiapp.glycemiaservice.db.Glycemia
import com.globiapp.glycemiaservice.services.GlycemiaService
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.time.OffsetDateTime
import java.time.ZonedDateTime

@RestController
@RequestMapping("/glycemias")
class GlycemiaApiController(val glycemiaService: GlycemiaService) {

    private val logger: Logger = LogManager.getLogger(GlycemiaApiController::class.java)

    @PostMapping
    fun registerGlycemia(@RequestBody glycemia: Glycemia): Glycemia {
        logger.info("GlycemiaApiController.registerGlycemia - entering register of glycemia")
        val response = glycemiaService.registerGlycemia(glycemia)
        logger.info("GlycemiaApiController.registerGlycemia - exiting register of glycemia")
        return response;
    }

    @GetMapping
    fun getGlycemias(@RequestParam date: ZonedDateTime): List<Glycemia> {
        logger.info("GlycemiaApiController.getGlycemias - entering get glycemias")
        val response = glycemiaService.getGlycemias(date)
        logger.info("GlycemiaApiController.getGlycemias - exiting get glycemias")
        return response;
    }
}