package com.ifinterested.data.authors

import com.ifinterested.models.Author
import com.ifinterested.models.Date

val markStanden =
    Author.create(name = "Mark Standen", bio = "Loves Kotlin", imagePath = "ms-profile.jpeg", since = Date(2020, 2, 1))