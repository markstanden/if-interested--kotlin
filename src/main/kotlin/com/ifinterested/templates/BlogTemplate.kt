package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import kotlinx.html.BODY
import kotlinx.html.article
import kotlinx.html.h2
import kotlinx.html.section

fun BODY.blogPosts(posts: List<BlogPost>) =
    section {
        posts.forEach {
            article {
//                apply { createPost(postTitle = it.title, postBody = it.body) }
                section("title-section") {
                    h2(classes = "post-title") {
                        +it.title
                    }
                }
                section(classes = "post-body") {
                    it.body.forEach {
                        apply(it)
                    }
                }

            }
        }
    }