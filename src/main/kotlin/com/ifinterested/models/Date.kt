package com.ifinterested.models

import kotlinx.serialization.Serializable
import java.time.LocalDate

@Serializable
data class Date(
        val year: Int = LocalDate.now().year,
        val month: Int = LocalDate.now().monthValue,
        val day: Int = LocalDate.now().dayOfMonth,
)