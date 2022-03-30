package com.ifinterested.templates

import com.ifinterested.models.PostElement
import kotlinx.html.ARTICLE
import kotlinx.html.h2
import kotlinx.html.section

fun ARTICLE.createPost(postTitle: String, postBody: List<PostElement>): ARTICLE.() -> Unit =
    {
        section("title-section") {
            h2(classes = "post-title") {
                +postTitle
            }
        }
        section(classes = "post-body") {
            postBody.forEach {
                apply(it)
            }
        }

    }