package com.globiapp.glycemiaservice.db

import jakarta.persistence.*
import java.time.OffsetDateTime

@Entity
@Table(name = "glycemias")
data class Glycemia(

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long,

    @Column(name = "glycemic_index", nullable = false)
    val glycemicIndex: Int,

    @Column(nullable = false)
    val data: OffsetDateTime
)