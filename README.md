# The Amplifier

**Platform:** React Native (Expo)  
**Category:** Educational / Interactive Game  
**Author:** Ansley Rodrigues  

---

## Overview

**The Amplifier** is an interactive mobile game that teaches the concept of **positive feedback loops**. Players manage a central Orb's *Echo Strength (ES)* by tapping to amplify it while avoiding critical overload or decay. The game demonstrates how consistent input can drive growth, and how uncontrolled amplification can lead to system collapse.

## In-game Screenshots

<img width="508" height="1414" alt="Screenshot 2025-11-03 at 4 30 40 PM" src="https://github.com/user-attachments/assets/b5f63eb2-a1ce-4268-b55b-19b0d26d0fe4" />

<img width="463" height="1418" alt="Screenshot 2025-11-03 at 4 33 52 PM" src="https://github.com/user-attachments/assets/08f28fe8-fb22-4384-b057-0749e4da7c75" />

---

## Gameplay

### Objective
- Reach a target **Echo Strength range** (e.g., 100–150 ES) without exceeding the critical threshold (e.g., 200 ES).  
- Maintain consistent input to prevent decay below a minimum threshold.

### Core Mechanics
- **Tap the Orb** to increase ES.
- Each tap **multiplies ES** by a fixed amplification factor (e.g., 1.2x).  
- Orb visually **grows and brightens** as ES increases.  
- **Audio cues** reinforce player actions:
  - Ascending tones with each tap
  - Positive chime at target range
  - Shattering sound on overload
  - Fading tone on decay

### Win/Lose Conditions
- **Win:** Reach and maintain the target ES range.  
- **Fail - Overload:** ES exceeds critical threshold → Orb shatters.  
- **Fail - Decay (Optional):** ES falls below minimum threshold → Echo fades.

---

## Features
- Minimalist and clean UI focusing on the central Orb.
- Dynamic visual feedback: size, brightness, and color changes.
- Responsive audio feedback for actions and outcomes.
- Real-time ES display and player notifications.
- Mobile-optimized for smooth gameplay on iOS and Android.

---

## Installation & Running

1. **Clone the repository**
```bash
git clone <repository-url>
cd The-Amplifier
