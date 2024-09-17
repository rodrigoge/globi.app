package com.globiapp.glycemiaservice.db

import org.springframework.data.repository.CrudRepository
import java.time.OffsetDateTime
import java.time.ZonedDateTime

interface GlycemiaRepository : CrudRepository<Glycemia, Long> {
    fun findAllByCreationDateBetween(startDate: ZonedDateTime, endDate: ZonedDateTime): List<Glycemia>
}