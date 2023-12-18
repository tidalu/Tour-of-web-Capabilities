## important

### Web Capability

    - Ability of a web browser or web application to perform a specific task or function using typical a built-in API

### Warn ing

    - have in mind it is  the web platform. Compatibilty may be an issue with capabilities
    - Progressive enhacement

### Capabilities by maturity

    * Green API --- APIs available on every browser
        on every platform, when technically
        possible. Mature, use them with confidence

    * Light-green API ---  Available only on some
        browsers. They matured within the
        supported subgroup of browsers so that
        you can use the capability confidently on
        them.

    * Yellow API --- not yet mature; they are only
        available on some browsers, and within
        tests or trials.  -- we also can use origin trials we can register for in queue apis which is only available for trial, like chrome , edge firefox does have origin trials

    * Red API ---  You can't use them, and plans to add
        them are still long term

### Links

    * [MDN](developer.mozilla.com)
    * [CanIuse](caniuse.com)
    * [web.dev](web.dev)
    * [webKit](webkit.org/blog)
    * [chromeStatus](chromestatus.com)

### Baseline

    - A multi-vendor effort
    - Defines  alist of stable capabilities for all browsers (green)
    - stable version for the Web
    - one list per year starting with 2023
    - Every year we will have new one like :
    - Baseline 2024
    - Baseline 2025

## Basic APIs

### Permissions and security

    - Some permissions
        -- Are harmless
        -- Have no cost

    - Sone other permissions
        -- Open a privacy risk[ camer, microphone, location]
        -- involves a cost

    - When there are costs or risks , some browsers decides to put a limit
        on it
        -- User enganement requirements
        -- Permission dialog to the user [ it is when we are using google meet or meeting links, or maps  browser asks to access to the camera, location, audio]

    - Most capabilities will require HTTPS[safari still not]

    - Some capabilities will need a user interaction to be enabled ( aka
        you cannot trigger it on page load )

    - Permissions are granted on an origin base

    - If user denies a permission, the API won't be able to ask again ,
        manual re-enable will be mandatory

    - If user granted a permission, it may be with no time limit , for a
        couple of days, for the session or just one useage


    - The APi is enabled by default to the main navigation and sometimes
        off for iframes

    - What if you want to turn a capability on or off ?
        -- Permissions Policy spec
        -- It is an HTTP header: Permissions-Policy
        -- For iframes it is  an HTML attribute

    We can define multiple policies at one of with multiple HTTP headers
    ```
        Permissions-Policy: geolocation=(self "https://www.domain.com"
        "https://my.domain.com") camera=* picture-in-picture=()

        Permissions-Policy: bluetooth=()
    ```

## Permission API

    -  it can be "granted", "prompt", "denied"
        if it throws exception, it's an unsupported permission

## Sensors

    - What is a sensor > A sensor is a chipset that is
        available oin one particular  device that is measuring
        something


    - There are different sensors on devices mostly on mobile
        devices
        -- Accelerometer (3 axis{x, y, z, currentAcceleration})
            --> it is postion of the
            device ex. on mobile, how we are holding the phone, we can detect that even
        -- Gyroscope -->  it is like one axis but we can
            get the values of the angle of the device

        -- Magnetometer --> like compas we can detect that

        -- Proximity --> it is to detect how the user is
            interacting with phone like distance between user
            and device, ex. if user is playing a game and got a
            call, gets the phone to his ears , at that time we
            should pause the game ofc

        -- Light sensor --> it is to detect the linght in the
            rooom and then we can change from dark to light , like that


    - There are typically two ways to consume them:

        -- Old APIs (global DOM Apis)

        -- Sensor API ( not on safari )


    - Sensor permissions set for HTTP headers

        -- AbsoluteOrientationSensor
            Permission Policy Name : 'accelerometer',
            'gyroscope' , 'magnetometer'

        -- Accelerometer
            Permission Policy Name : 'accelerometer'

        -- AmbientLightSensor
            Permission Policy Name : 'ambient-light-sensor'

        -- GravitySensor
            Permission Policy Name : 'accelerometer'

        -- Gyroscope
            Permission Policy Name : 'gyroscope'

        -- LinearAcceleratorSensor
            Permission Policy Name : 'accelerometer', 'linear-acceleration-sensor'

        -- Magnetometer
            Permission Policy Name : 'magnetometer'

        -- RelativeOrientationSensor
            Permission Policy Name : 'accelerometer', 'gyroscope' , 'magnetometer'

        --- sensors u wanna use are accelerometer, gyroscope magnetometer

## Geolocation API

    - How does it work ?
    - Provide agnostic
    - it needs user's permission
    - it relies on the browser or operation system service
    - works only in the foreground
    - not suitable for geofencing or beacon-based location

### Accuracy on location

        • Since iOS and iPadOS 14, users can decide
            if they want to share with apps precise or
            imprecise location
        • User grant that location to Safari to all web
            apps at the same time
        • There is no API to actually know in which
            mode the user is
        • For imprecise, you will get an accuracy
            between 3000 to 9000 meters (~2 to 6
            miles)
        • Android 12+ has a similar issue but not
            affecting web apps a lot.

## Screen Orientation

    - It is green , to mainly know if the device is landscape or portrait

### Touch Events

    - They work only with touch screens
        -- BAsic: touchstart, touchend , touchcancel
        -- drag: touchmove
    - Event is fired with multiple coordinates(for multi-touch) including optional force  if available

### Pointer Events

    - They work with mouse , trackpad, touch, pen, stylus and more, you recieve one call per interaction,
        even if they are at the same time
        -- Press: pointerdown ,pointerup, pointercancel
        -- Hover: pointerover, pointerout
        -- Drag: pointermove, pointerenter, pointerleave
    - The event recieves coordinates, a pointer id, the pointer type and optional pressure, litl, twist
        data (useful with a stylus or on some touch screens )

### Virtual keyboard

    - to use with touch devices
        navigator.virtualkeyboard.overlaysContent = true;
        navigator.virtualkeyboard.show()
        navigator.virtualkeyboard.hide()
        navigator.virtualkeyboard.addEventListenter('geometrychanged', e => {})

    - for css, there are also new environmental variables
        keyboard-insert-top
        keyboard-insert-bottom
        keyboard-insert-right
        keyboard-insert-left
        keyboard-insert-width
        keyboard-insert-height

        margin-block-end: env(keyboard-insert-height, 100px);

## Web HID API {Human Innterface Device}

    - It works on chromium based browsers (not on safari)
    - let us access devices connected to a user's computer via USB or Bluetooth
    - Built on top of the widely adopted HID protocol
    - Providers users with control over which devices web applications can access
    - User must grant permission through a browser dialog box before a web application can
        access a device
    - Userful for non-standard input devices
    - It is a low level API

    - U need to know the device communication API

## Speech Recognition API

    - It allows us to listen for user's voice and get a text transcript. It works only after a user gestrue and microphone permission

## Speech Synthesis APi

    - We can make the wen app speach in the standard speaker based on a text transcript. it uses
        synthesis voices from the OS

## Shape detection API - Face Detector API Text detector APi

    - This is an experimental API working on Chrome and Android only

## Media Devices

    - It let's u to open the camera and mictophone to get the stream. for years, it was known
        as getUserMedia

## Advanced Control Camera

    - Also known as Camera PTZ(Pan, tilt, Zoom)
    - It can be used to adjust the input stream for live streaming or for taking photos
    - It is useful for mixing it with UI controls
