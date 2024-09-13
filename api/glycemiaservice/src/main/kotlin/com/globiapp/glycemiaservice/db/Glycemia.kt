package com.globiapp.glycemiaservice.db

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.ZonedDateTime

@Entity
@Table(name = "glycemias")
data class Glycemia(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long,

    @Column(name = "glycemic_index", nullable = false)
    val glycemicIndex: Int,

    @Column(nullable = false)
    val creationDate: ZonedDateTime
)