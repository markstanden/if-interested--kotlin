package com.ifinterested.models

import kotlinx.serialization.Serializable
import java.util.concurrent.atomic.AtomicInteger

@Serializable
class Author private constructor(
        val authorID: Int,
        val name: String,
        val bio: String,
        val imagePath: String,
        val since: Date,
) {
    companion object {
        private val atomicID = AtomicInteger()

        fun create(name: String, bio: String, imagePath: String, since: Date = Date()) =
            Author(authorID = atomicID.getAndIncrement(),
                   name = name,
                   bio = bio,
                   imagePath = imagePath,
                   since = since)
    }
}