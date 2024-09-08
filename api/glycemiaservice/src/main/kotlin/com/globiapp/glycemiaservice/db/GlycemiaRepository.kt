package com.globiapp.glycemiaservice.db

import org.springframework.data.repository.CrudRepository
import java.time.OffsetDateTime

interface GlycemiaRepository : CrudRepository<Glycemia, Long> {
    fun findAllByDataBetween(startDate: OffsetDateTime, endDate: OffsetDateTime): List<Glycemia>
}