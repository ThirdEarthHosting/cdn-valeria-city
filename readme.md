# Colors description

The color section represents the set of colors available to create the site's theme, from primary to tertiary colors, with their respective variations. When customizing your theme, the keys on the objects will indicate which property should be used in the global style sheet. If there is any very specific customization, please contact the ThirdEarth development.
All color and font changes are made in the <code>styles.json</code> file of your cdn


**Tips**

*General background of the site use* 

- ## webSiteBackground color. 

<img src="https://cdn-readme.third.earth/webSiteBackground.jpg">

<br/>
<hr/>

Only Banner and navBar( for the navBar, the color is primary when its in '/' path) 

- ### primary color.

<img src="https://cdn-readme.third.earth/banner.png">

  *Announcement container* <br/>
  *ship setting menu* <br/>
  *checkout form button* <br/>
  *secondaryButton (secondary button is the main button using in pages like a home, login, register, contact, logout)*
   use:
   
- ### secondary color

<img src="https://cdn-readme.third.earth/secondaryColor.jpg">
<hr/>

*secondaryButton hover use*
- ### secondaryHover color. 

<img src="https://cdn-readme.third.earth/secondaryHover.jpg">
<hr/>

*Expires Modal* <br/>
*BebackSoon component*<br/>
    use:
- ### tertiary color
<img src="https://cdn-readme.third.earth/tertiaryColor.jpg">
<hr/>

 secondary text color is using in every places that background color is not [webSiteBackgroundColor], 
 
*success message*<br/>
use:
- ### success color
<img src="https://cdn-readme.third.earth/success.jpg">
<hr/>

*error message*<br/>
use:
- ### error color
<img src="https://cdn-readme.third.earth/error.jpg">
<hr/>

*info message*<br/>
use:
- ### info color
<hr/>

*warning message*<br/>
use:
- ### warning color
<br/>
<br/>


# Fonts descriptions 
The font block brings the two possible font groups that the site can use, [primary] being the first option and [secondary] the option that will be loaded if the primary is unavailable
<br/>
<br/>

# Fonts size description
*The block of font size brings a list of sizes for the site's font, where: <br/> **titles h1**(are the main message, like displayed in banner 'Hosting the future starts here')*
 use 
- ### largest size
 
 **h2** *(is used for the majority sub title. Ex: 'What is Urbit?' or 'Why urbit') <br/>use:*
 - ### medium size
 
 **h3** *(are the headers used on cards that describe the details of the urbit. Like what is the urbit id, the os urbit) use*
 - ### small

 # Hero Images and Logo

## Hero Images
*Hero image functionality is now* available for some components. Currently available the banner and the section whyUrbit.
However, images need to meet some requirements to take full advantage of the functionality and provide a good end-user experience. 

#### Normal size

- ##### maximum recommended size 800kb
- ##### maximum recommended resolution 3000x1848px

#### Moblile Size

- #### maximum recommended size 700kb
- #### maximum recommended resolution 854x1183px

It is necessary to remember the contrast that must exist between the background image and the text on it. When a background image is being used, the default color of the text is the one with the secondaryText key, in this case, the chosen image should make a contrast, improving the user's view.

## Logo Image Size
If it's a rectangular image
- #### maximum recommended resolution 980px × 317 px
If it's a square image

- #### maximum recommended resolution 410px × 410px

Their recommended sizes may change depending on the level of detail in the image. Other sizes may be more interesting in some cases.

.

# External links
Some pages may have links that redirect to external sites.
The home page, blog and about are enabled for this.<br>
* /home<br>
* /blog <br>
* /about

If you want to use this feature, change your <code>settings.json</code> file by adding the following keys:

```json
"client_custom_links":{
    "home":"http://urbit.org", 
    "about":"https://urbit.org/overview", 
    "blog":"https://urbit.org/blog",
}
```

The keys listed are optional, that means it can be configured for one, two or even all three pages at the same time. Make sure the URLs set are not valid, to avoid redirection errors, mistakes in keys (such as duplication of lyrics from blog to blog) also result in errors.

.
# Product Card Type
There are two types of product card available, with hero image and without hero image (default)

## Default product card
<img src="https://cdn-readme.third.earth/nonHero.png">

## Product card with hero image
<hr/><img src="https://cdn-readme.third.earth/withHero.png">
<hr/>

By default, the product card comes without a hero image, if you want to configure it, change your <code>settings.json</code> file by adding the following key:

```json
"client_product_card_preference": "withHero"
```
### Product image size
- #### maximum recommended resolution 1300px x 952px

Larger or smaller recommended sizes can be used, depending on the level of detail in the image, it may be interesting to test beforehand.



.
# Suppress purchase cycle
It is possible to enable or disable the ship purchase cycle in the application. By enabling this functionality, the entire purchase cycle is disabled, but the user will still be able to continue accessing and managing their existing ships.
To enable or this functionality, change the <code>settings.json</code> file by adding the following key:

```json
  "suppress_purchase": true,
```
use false to disable and true to enable

.
# Changing website text via CDN
it is possible to customize the texts of the site, for each page/component. To do this, add the file with the name of the page or component with the .json extension inside the language folder in your cdn repository.

**Use case: Changing footer text**
<br>
To change the footer text, create the footer.json file inside the <code>language.json</code> folder in your cdn repository.
Insert the code below into the file:

cdn>language>footerComponent.json
```json
[
    {
        "lang_code": "en",
        "content": {
            "made" : "Made with",
            "by": "by the ThirdEarth [from CDN] team",
            "terms": "Terms of Service",
            "policies": "Policies and Privacy",
            "cookies": "Cookies"
        }
    }
]
```


