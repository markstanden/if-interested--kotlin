package com.ifinterested.models

import kotlinx.serialization.Serializable
import java.util.concurrent.atomic.AtomicInteger

@Serializable
class BlogPost private constructor(
        val postID: Int, val title: String, val body: String, val authorID: Int, val date: Date,
) {
    companion object {
        private val atomicID = AtomicInteger()

        fun create(title: String, body: String, authorID: Int, date: Date = Date()) =
            BlogPost(postID = atomicID.getAndIncrement(), title = title, body = body, authorID = authorID, date = date)
    }
}