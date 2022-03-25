package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.section

class BlogTemplate(val posts: List<BlogPost>) : Template<FlowContent> {
    val blogPost = TemplatePlaceholder<PostTemplate>()

    override fun FlowContent.apply() {
        section {
            posts.forEach {
                insert(PostTemplate(
                        postTitle = it.title,
                        postBody = it.body
                ), blogPost)
            }
        }
    }
}