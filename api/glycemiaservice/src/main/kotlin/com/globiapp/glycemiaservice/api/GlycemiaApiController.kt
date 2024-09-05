package com.globiapp.glycemiaservice.api

import com.globiapp.glycemiaservice.db.Glycemia
import com.globiapp.glycemiaservice.services.GlycemiaService
import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/glycemias")
class GlycemiaApiController(val glycemiaService: GlycemiaService) {

    private val logger: Logger = LogManager.getLogger(GlycemiaApiController::class.java)

    @PostMapping
    fun registerGlycemia(@RequestBody glycemia: Glycemia): Glycemia {
        logger.info("GlycemiaApiController.registerGlycemia - entering register of glycemia")
        val response = glycemiaService.registerGlycemia(glycemia);
        logger.info("GlycemiaApiController.registerGlycemia - exiting register of glycemia")
        return response;
    }
}