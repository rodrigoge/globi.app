package com.globiapp.glycemiaservice.db

import org.springframework.data.repository.CrudRepository

interface GlycemiaRepository : CrudRepository<Glycemia, Long> {
}