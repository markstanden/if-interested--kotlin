package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.SECTION
import kotlinx.html.h2
import kotlinx.html.section

class SinglePostTemplate(val posts: List<BlogPost>) : Template<FlowContent> {
//    val postTitle = Placeholder<FlowContent>()
//    val postBody = PlaceholderList<SECTION, FlowContent>()

    override fun FlowContent.apply() {
        posts.first().also {
            section("title-section") {
                h2(classes = "post-title") {
                    +it.title
                }
            }
            section(classes = "post-body") {
                it.body.forEach {
                    +it.content
                }
            }
        }
    }
}