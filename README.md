# :low_brightness: The Glowing Review :low_brightness:


![Heroic Sunrise](/src/img/mainPage.png)


### Table of Contents
1. [The Why](#why)
2. [Demo](#demo)
3. [Features](#features)
   1. [Navigation](#nav)
   1. [Search Bar](#search)
   1. [Preview Business](#preview)
    1. [User Profile](#user)
    1. [Business Profile](#biz)
    1. [Favorite Businesses](#faves)
    1. [Glow Up](#glowup)

2. [The Struggle is Real](#struggle)

4. [Planning vs Production](#planning)
5. [Our Favorite Sections of Code](#favorites)

## The Why <a name="why"></a>
For years now, Yelp has dominated the online reviews sector. Overtime, this has led to the market being saturated by negative reviews, pay-to-win features, and an unnecessary barrier that small local businesses need to overcome.

The Glowing Review, is a brand new review site that spreads positivity in a negative and reactionary internet era. 

## Demo <a name="demo"></a>
The website itself opens with a beautiful sunset exemplifying the spirit behind The Glowing Review. There are a few routes that you are able to click on. Clicking on “search” on the left or the title of the site in the middle will lead the user to the main search page. On the search page, the user is greeted with business previews that have a glow rating, as well as a map. When clicking on a business name, the user is led to that businesses profile page. Each business profile has its own unique route. The profile route is located on the very top right of the navigation bar and when clicked, will lead the user to their unique user profile.

## Features <a name="features"></a>

- **Navigate** to the search page to see a grid of local restaurants.
![business preview](/src/img/searchBlock.png)

---

- Type into the **search bar** <a name="search"></a> to find specific restaurants, which will show on the business preview section and filter the pins on the map to the right.
![altText](/src/img/searchAction.gif)

---

- **Favorite**<a name="faves"></a> a restaurant by clicking on the favorite button located on the business preview card. 
![altText](/src/img/myFavorite.png)

---

- Go to my **user profile**<a name="user"></a> by clicking the profile route located on the top right of the page.
![altText](/src/img/myProfile.png)

---

- See **my profile**<a name="user"></a> info, favorite restaurants, and reviews. 
Click on a business name on a business preview card to be led to that **businesses’ profile**.
![altText](/src/img/businessPage.png)

---

- Leave **reviews**<a name="biz"></a> for a restaurant on their business profile page.
![altText](/src/img/myReview.png)

---

- “Like” a restaurant multiple times to add to its **glow rating**<a name="glowup"></a>. 

**A restaurant preview before liking**
--
![altText](/src/img/beforeLiking.png)

**A restaurant preview after liking**
--
![altText](/src/img/afterLiking.png)

---
## The Struggle is Real <a name="struggle"></a>

Throughout this project, our group ran into a flurry of difficulties that we did not expect whatsoever during the brainstorming and planning process for this webapp.

With grandiose goals of utilizing the Yelp API, we realized that the Yelp API is limited to server side requests when we needed to use it for client side requests. Thus we decided to use the Google Maps API, for our data on businesses. However, we ran into the same issue. 

We ultimately decided to create our own json data to reach our minimum viable product. Many of our initial stretch goals became unattainable due to issues with API’s. Some of these goals include, running a natural language API from google that would rate our comments based on their positivity. Another goal was to be able to rate and comment specific products or services provided by a business.

Though there were many struggles, we pushed through to reach our minimum viable product.

## Planning vs Production <a name="planning"></a>

### Search Page
Wire Frame
![altText](/src/img/searchWireFrame.png)
MVP
![altText](/src/img/searchPage.png)
---
### User Profile
Wire Frame
![altText](/src/img/myProfileWireFrame.png)
MVP
![altText](/src/img/myProfile.png)
---
### Business Profile
Wire Frame
![altText](/src/img/bizProfileWireFrame.png)
MVP
![altText](/src/img/businessPage.png)


# Our Favorite Sections of Code <a name="favorites"></a>

- **Daniel:** My favorite section to work on was implementing the feature where a user can click on the favorite button on a business preview card to add it to their user profile.

``` javascript
 favoriteRes = (biz) => {
    this.setState(
      (prevState) => {
        let updatedUser = [...prevState.users];
        updatedUser[0].favorites.push(biz.id);
        return { users: updatedUser };
      },
      () => this.addFave()
    );
  };

  addFave = () => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...this.state.users[0] }),
    };

    fetch("http://localhost:3000/users/1", configObj)
      .then((r) => r.json())
      .then(console.log())
      .catch((e) => console.error("e:", e));
  };
```

- My other favorite section was creating a form where a user can leave a review on a business profile and have that review be added to their reviews on their user profile.


```javascript
  upDateUserReviews = (e) => {
    let updatedUser = [...this.state.users];
    updatedUser[0].reviews.push(this.state.reviews);
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedUser[0] }),
    };
    fetch("http://localhost:3000/users/1", configObj)
      .then((r) => r.json())
      .then(console.log)
      .catch((e) => console.error("e:", e));
    e.target.reset();
  };


   patchReview = (event) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...this.state.business}),
    };

    fetch(
      `http://localhost:3000/restaurants/${this.props.business.id}`,
      configObj
    )
      .then((r) => r.json())
      .then(this.props.upDateUserReviews(event))
      .catch((e) => console.error("e:", e));
  };
```
> The gang working hard, or hardly working?

![altText](/src/img/gang-gang.png)


- **Nick:**  My favorite section I worked on was creating the business page. Specifically, I enjoyed implementing the like feature that allowed users to like a business and dynamically change the business’s glow rating. 

``` javascript
  addALike = () => {
    let newLikes = this.state.likes + 1;
    this.setState({ likes: newLikes }, this.likeBusiness());
  };

  likeBusiness = () => {
    let update = this.state.likes;
    fetch(`http://localhost:3000/restaurants/${this.props.business.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: update }),
    })
      .then((res) => res.json())
      .then(this.glowGraph(update))
      .catch((e) => console.error("e:", e));
  };

```
- I also liked figuring out how to add a review to a specific business’s page.

```javascript

  handleChange = (e) => {
    this.setState({ review: e.target.value });
  };

  handleSubmitReview = (e) => {
    e.preventDefault();
    let updatedBusiness = { ...this.state.business };
    updatedBusiness.reviews.unshift(this.state.review);

    this.setState(
      {
        business: updatedBusiness,
      },
      this.patchReview(e)
    );
  };

  patchReview = (event) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...this.state.business}),
    };

    fetch(
      `http://localhost:3000/restaurants/${this.props.business.id}`,
      configObj
    )
      .then((r) => r.json())
      .then(this.props.upDateUserReviews(event))
      .catch((e) => console.error("e:", e));
  };

```

- **Roman:**  There were a lot of interesting things that I leaned from this. Patience was the biggest learning curve as I almost lost it on the Yelp API, and then the Google API. 