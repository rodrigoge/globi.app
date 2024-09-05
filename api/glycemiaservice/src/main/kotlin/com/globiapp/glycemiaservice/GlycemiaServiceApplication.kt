package com.globiapp.glycemiaservice

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GlycemiaServiceApplication

fun main(args: Array<String>) {
	runApplication<GlycemiaServiceApplication>(*args)
}
