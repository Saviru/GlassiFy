## GlassiFy - A JavaScript Library for Glassmorphism Effects

GlassiFy is a lightweight JavaScript which aspired by Apple's new Liquid Glass design. This enables developers to easily apply glassmorphism effects to their web applications. With just a few lines of code, you can transform your UI elements into sleek, frosted glass-like components.

### Features
- Import the JavaScript library via [CDN](https://cdn.jsdelivr.net/gh/Saviru/GlassiFy@1.0.0/glassify.js) or download it directly from the repository.
- Create a HTML element called `glassi-fy` to apply the glassmorphism effect.
- Easy to use: Just include the library and apply the `glassify` class to your elements.
- Customizable: Adjust the blur, transparency, and other properties to fit your design needs.
- Lightweight: Minimal impact on performance and loading times.

## Demo

<img src="demo.gif" alt="GlassiFy Demo" width="600"/>


### Usage   
1. **Include the Library**: Add the following script tag to your HTML file to include the GlassiFy library via CDN:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/Saviru/GlassiFy@1.0.0/glassify.js"></script>
   ```
    Alternatively, you can download the `glassify.js` file from the repository and include it locally:
    ```html
   <script src="glassify.js"></script>
    ```
2. **Add the Custom Element**: Use the `glassi-fy` custom element in your HTML to apply the glassmorphism effect. You can customize the effect using attributes like `blur`, `transparency`, and `saturation`.
   ```html
   <glassi-fy></glassi-fy>
   ```
3. **Add Class to Elements**: Apply the `glassify` class to any HTML element you want to have the glassmorphism effect.
   ```html
   <div class="mydiv glassify">
       Your content here
   </div>
   ```
4. **Customize that Element with a Style Sheet**: You can further customize the appearance of the glassmorphism effect using CSS.
   ```css
   .mydiv {
       /* Your custom styles here */
   }
   ```

### Example
```html
<glassi-fy></glassi-fy>
<div class="mydiv glassify">
    <h1>Hello, GlassiFy!</h1>
    <p>This is a sample text with glassmorphism effect.</p>
</div>
```
### Demo
You can see a live demo of GlassiFy in action [here](https://saviru.qzz.io/GlassiFy/Demo).

### License

```Copyright (c) 2025 Saviru Kashmira Atapattu```

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

### Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

<hr>
<p align="center">Made with ❤️ for Web Development Community</p>