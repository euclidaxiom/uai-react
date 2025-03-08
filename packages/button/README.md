# @uai-ui-react/button

## Theme API

### Border Radius

| Token                             | Description                                    | Fallback                    | States |
| --------------------------------- | ---------------------------------------------- | --------------------------- | ------ |
| `--button--border-radius`         | Sets the default border radius for all buttons | -                           | -      |
| `--button--border-radius--{size}` | Border radius for each button size             | ⟩ `--button--border-radius` | -      |

### Colors

| Token                             | Description                       | Fallback            | States           |
| --------------------------------- | --------------------------------- | ------------------- | ---------------- |
| `--button--color`                 | Default text color                | -                   | `{token}--hover` |
| `--button--color--{variant}`      | Text color for each variant       | ⟩ `--button--color` | `{token}--hover` |
| `--button--background--{variant}` | Background color for each variant | -                   | `{token}--hover` |

### Typography

| Token                              | Description                                                                                                                                                          | Fallback | States |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| `--button--font-weight`            | Font weight for button text                                                                                                                                          | -        | -      |
| `--button--letter-spacing--{size}` | Letter spacing for each button size.<br>Adjust this value based on your chosen font-family and the specific font-size of each button size.<br><br>Size 32: `13.45px` | -        | -      |

### Icon Styling

- `--button--icon-color`: Default color for button icons
- `--button--icon-color--plan`: Color for icons in "plan" variant buttons
- `--button--icon-color--hover`: Color for icons on hover
- `--button--icon-color--plan--hover`: Color for icons in "plan" variant buttons on hover

| Token                             | Description                     | Fallback                 | States           |
| --------------------------------- | ------------------------------- | ------------------------ | ---------------- |
| `--button--icon-color`            | Default color for icons         | ⟩ `currentColor`         | `{token}--hover` |
| `--button--icon-color--{variant}` | Color for icons in each variant | ⟩ `--button--icon-color` | `{token}--hover` |

### Cursor

| Token              | Description                             | Fallback    | States |
| ------------------ | --------------------------------------- | ----------- | ------ |
| `--button--cursor` | Cursor style when hovering over buttons | ⟩ `pointer` | -      |

## Usage Example

```css
:root {
  /* Custom button styling */
  --button--border-radius: 8px;
  --button--color: #333333;
  --button--color--plan: #ffffff;
  --button--background--plan: #0066cc;
  --button--background--plan--hover: #0052a3;
  --button--font-weight: 600;
}
```
