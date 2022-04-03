package com.ifinterested.templates
//
//import io.ktor.server.html.*
//import kotlinx.html.ARTICLE
//import kotlinx.html.FlowContent
//import kotlinx.html.SECTION
//import kotlinx.html.article
//import kotlinx.html.h2
//import kotlinx.html.section
//
//class BlogPosts : Template<FlowContent> {
//    override fun FlowContent.apply() {
//        section {
//            posts.apply() {
//                article {
//                    section("title-section") {
//                        h2(classes = "post-title") {
//                            i
//                        }
//                    }
//                    section(classes = "post-body") {
//                        it.body.forEach {
//                            apply(it)
//                        }
//                    }
//
//                }
//            }
//        }