package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.article
import kotlinx.html.h2
import kotlinx.html.section

class PostTemplate(
        val postTitle: String,
        val postBody: String,
) : Template<FlowContent> {


    override fun FlowContent.apply() {
        article {
            section("title-section") {
                h2(classes = "post-title") {
                    +postTitle
                }
                section(classes = "post-body") {
                    +postBody
                }
            }
        }
    }
}