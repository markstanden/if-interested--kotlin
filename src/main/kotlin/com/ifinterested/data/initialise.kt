package com.ifinterested

import com.ifinterested.data.authors.markStanden
import com.ifinterested.data.posts.markstanden.elvis
import com.ifinterested.models.BlogPost
import com.ifinterested.models.Date
import com.ifinterested.models.PostElement
import com.ifinterested.models.ValidPostElement

fun initialise(): List<BlogPost> {
    return listOf(elvis, BlogPost.create(title = "A Great Post",
                                         body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something great"),
                                                       PostElement(ValidPostElement.CODE, "val test = 1"),
                                                       PostElement(ValidPostElement.PARAGRAPH, "Great code."),
                                                       PostElement(ValidPostElement.IMAGE, "/images/mug.svg")),
                                         authorID = markStanden.authorID, date = Date(2020, 6, 1)),
                  BlogPost.create(title = "Another Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something greater")),
                                  authorID = markStanden.authorID, date = Date(2022, 1, 1)),
                  BlogPost.create(title = "The Best Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About the best thing ever")),
                                  authorID = markStanden.authorID, date = Date(2021, 6, 30)),
                  BlogPost.create(title = "A Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something great"),
                                                PostElement(ValidPostElement.CODE, "val test = 1"),
                                                PostElement(ValidPostElement.PARAGRAPH, "Great code.")),
                                  authorID = markStanden.authorID, date = Date(2020, 6, 1)),
                  BlogPost.create(title = "Another Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something greater")),
                                  authorID = markStanden.authorID, date = Date(2022, 1, 1)),
                  BlogPost.create(title = "The Best Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About the best thing ever")),
                                  authorID = markStanden.authorID, date = Date(2021, 6, 30)),
                  BlogPost.create(title = "A Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something great"),
                                                PostElement(ValidPostElement.CODE, "val test = 1"),
                                                PostElement(ValidPostElement.PARAGRAPH, "Great code.")),
                                  authorID = markStanden.authorID, date = Date(2020, 6, 1)),
                  BlogPost.create(title = "Another Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something greater")),
                                  authorID = markStanden.authorID, date = Date(2022, 1, 1)),
                  BlogPost.create(title = "The Best Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About the best thing ever")),
                                  authorID = markStanden.authorID, date = Date(2021, 6, 30)),
                  BlogPost.create(title = "A Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something great"),
                                                PostElement(ValidPostElement.CODE, "val test = 1"),
                                                PostElement(ValidPostElement.PARAGRAPH, "Great code.")),
                                  authorID = markStanden.authorID, date = Date(2020, 6, 1)),
                  BlogPost.create(title = "Another Great Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About something greater")),
                                  authorID = markStanden.authorID, date = Date(2022, 1, 1)),
                  BlogPost.create(title = "The Best Post",
                                  body = listOf(PostElement(ValidPostElement.PARAGRAPH, "About the best thing ever")),
                                  authorID = markStanden.authorID, date = Date(2021, 6, 30)))
}