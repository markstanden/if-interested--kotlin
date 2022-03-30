package com.ifinterested

import com.ifinterested.models.Author
import com.ifinterested.models.BlogPost
import com.ifinterested.models.Date
import com.ifinterested.models.code
import com.ifinterested.models.paragraph

fun initialise(): List<BlogPost> {
    val mark =
        Author.create(name = "Mark Standen", bio = "Loves Kotlin", imagePath = "ms-profile.jpeg",
                      since = Date(2020, 2, 1))

    return listOf(BlogPost.create(title = "A Great Post",
                                  body = listOf(paragraph("About something great"), code("val test = 1"),
                                                paragraph("Great code.")), authorID = mark.authorID,
                                  date = Date(2020, 6, 1)),
                  BlogPost.create(title = "Another Great Post", body = listOf(paragraph("About something greater")),
                                  authorID = mark.authorID, date = Date(2022, 1, 1)),
                  BlogPost.create(title = "The Best Post", body = listOf(paragraph("About the best thing ever")),
                                  authorID = mark.authorID, date = Date(2021, 6, 30)))
}