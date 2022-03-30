package com.ifinterested.models

import java.util.concurrent.atomic.AtomicInteger

class BlogPost private constructor(
        val postID: Int, val title: String, val body: List<PostElement>, val authorID: Int, val date: Date,
) {
    companion object {
        private val atomicID = AtomicInteger()

        fun create(title: String, body: List<PostElement>, authorID: Int, date: Date = Date()) =
            BlogPost(postID = atomicID.getAndIncrement(), title = title, body = body, authorID = authorID, date = date)
    }
}