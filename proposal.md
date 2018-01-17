

NAME
Attention Tracker 

PRODUCT OVERVIEW

The Attention Tracker MVP provides a programmable timer for use with the "pomodoro technique" and tracks inputs from the user including times of strained attention and a user qualitative assessment of attention during focus periods. These inputs are recorded and presented in multiple contexts including time of day and portion of focus-period.  

At a high level the user will choose a length for focus periods and for breaks. Attention Tracker will provide a timer counting down the focus-period and will announce break time and then count down the break time, announce the next focus-period and so on. A button is available during focus-periods that allows users to log times when their attention is strained.  At the end of each focus-period the user is prompted with a brief qualitative assessment of their attention during that period. 

SPECIFIC FUNCTIONALITY
Spend some time drawing out on paper mockups every page of your MVP site.
Annotate every component of the interface every action the user can take.

If there is any actions your app needs to take in the background describe each of them and how they change the underlying data your app saves.

Minimum feature set:
	Programmable timer
	Attention survey
	Strained attention button
	Data display of attention quality and moments of strained attention by time of day and portion of focus-period

Pages:

	1. User Login Page: Allows new users to create accounts, accepts user name and password for login, and allows for password changes.  Components: Username/password inputs, create account link, forgotten password link.


	2. Timer setup page: Inputs for focus-period length and break length.  These inputs are used as variables in timer functions. 

	3. Active Timer: Timer displaying focus-period countdown in minutes, buttons to pause for interruptions, to cancel/end focus-period, and to record moments of strained attention.

	4.  Break Timer: Timer displaying break countdown in minutes, buttons to buttons to pause for interruptions, to cancel/end break.  

	5. Data display page(s): Page displaying (format???) tracked information including the number of focus-periods accrued, focus-periods across time, quality of focus-periods by time, and moments of strained attention.  This page is the least clear in design and development at this stage




TECHNICAL COMPONENTS

Moving parts:
Registration/login/password: Creates user in database; JS page sending info via Django(???) to database.  Retrieval and checking of password match done by similar method.   

Timers done in either JavaScript of Python(?); user input is taken as variables to set timer parameters.  Timers send tracked data to second database for later retrieval and viewing.  

Data display:  This could be as simple as a bit of JavaScript, HTML and CSS to create simple graphs but if it is manageable to use Python for data visualization using one of a dozen or so popular libraries.  

SCHEDULE

The easiest parts are likely a simple user interface via HTML/CSS and automated with JS.   A quick mockup without attention to styling is enough for an MVP with the option for more thorough aesthetic attention if other parts of the project are completed.  A few days should be enough for this.  

Making meaningful use of collected data is likely a difficult part.  The data being collected is by nature subjective and so there is real risk for ending up with meaningless and sparse data points.  Design detail and putting time into learning something about data visualization will reduce this risk.  Generally, making the various components work smoothly together seems likely to be the hardest part.  This may turn out to be wrong as I get specific guidance on how to construct the larger working whole, but at this planning stage the details of this are unclear and seem difficult. 



FURTHER WORK IN ORDER OF IMPORTANCE

Expanding to include additional kinds of data points
Having the option to be “locked out” of the computer during break periods
Styling and fancy dynamic components of the interface