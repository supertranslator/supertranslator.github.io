# Privacy Policy for SuperTranslator

**Effective date:** 2026-05-27
**Last updated:** 2026-05-27

This Privacy Policy describes how the SuperTranslator iOS app ("**SuperTranslator**", "**the app**", "**we**", "**us**") handles information when you use it. SuperTranslator is currently a research preview distributed as "SuperTranslator TEST" via Apple's TestFlight beta program.

## Summary

- SuperTranslator runs entirely **on your device**. It does **not** send your videos, photos, profile information, or any other personal data to us or to any third party.
- We do **not** collect, store, sell, or share any personal information.
- We do **not** use analytics, tracking, or advertising SDKs.
- We do **not** require an account, email address, or any other sign-up.

## Information stored on your device

The following information is stored **only on your device**, in iOS's standard `UserDefaults` and the app's private file container. It never leaves your device unless you explicitly choose to share or back it up via your own iCloud / iTunes / Finder backups.

- **Dog profile** (optional, if you fill it in): name, breed, photo, vet visit history, medical schedule, medicines, food history and schedule, dog passport details (microchip ID, registration number, date of birth, weight, color, country of origin, rabies vaccination date), and contacts.
- **Recently analyzed videos** (file references): paths to videos you've previously analyzed, so the app can list them on the home screen.
- **Analysis cache**: timestamped interpretations the app generated from your videos, kept on-device so it doesn't re-analyze the same video twice.
- **Feedback log**: a JSON-lines file capturing the "👍 correct / 👎 wrong" feedback you tap on phrases, plus the body-language signals visible at that moment. This file lives only on your device.
- **Onboarding state**: a flag remembering whether you've seen the onboarding screens.

You can delete all of this at any time by uninstalling the app from your device.

## Camera, microphone, and photo library access

SuperTranslator uses iOS system frameworks to access:

- **Camera** — to show the live camera preview during Live mode and to record videos when you tap "Record". Frames are processed entirely on-device by Apple's Vision framework and on-device machine learning models; they are never uploaded.
- **Microphone** — to detect vocalizations (barking, growling, whimpering, howling) using Apple's on-device Sound Analysis framework. Audio is analyzed in-memory and is not recorded to a file or transmitted.
- **Photo library (add-only)** — to save the rendered, watermarked share video to your Photos library when you tap the Share button and confirm the save. The app does not read existing photos through this permission.
- **Photo / video picker** — to let you select a video from your library for analysis. iOS handles the picker in a separate process and only hands the app the single file you choose; the app cannot access the rest of your library.

You can revoke any of these permissions at any time in **Settings → SuperTranslator TEST** on your device.

## On-device machine learning

SuperTranslator analyzes videos and live camera feed using machine learning models that ship inside the app and run entirely on your device. No video frames, audio samples, pose data, or interpretations are sent to us, to Apple, or to any other server for processing.

## Internet access

The app does not make any network requests of its own. The only times it opens an internet URL are when **you tap a button** that explicitly does so:

- Tapping the SuperTranslator logo or QR code opens `https://supertranslator.ai` in your default browser.
- Tapping a social-platform button on the share screen opens that platform's iOS app (or its App Store page if it isn't installed).
- Tapping "Open Settings" in a permission alert opens iOS's Settings app.

In each case, the destination app (Safari, the social app, Settings) handles the request — not SuperTranslator — and is governed by its own privacy policy.

## Sharing rendered videos

When you tap **Share** on the result screen, SuperTranslator renders a new video file that contains your original clip plus an on-screen caption track, a SuperTranslator watermark, and a QR code. The rendered file is saved to your Photos library and handed to the iOS share sheet. **What you do with that file from there is entirely your choice** — SuperTranslator does not upload it anywhere.

## Children's privacy

SuperTranslator is not directed at children under the age of 13. We do not knowingly collect any information from children.

## Third-party services

SuperTranslator uses only Apple's first-party iOS frameworks (Vision, Sound Analysis, AVFoundation, PhotosUI, Foundation Models, Core ML, SwiftUI). It does not embed any third-party analytics, advertising, crash-reporting, or other SDKs.

## Your rights

Because SuperTranslator does not collect or transmit personal information, there is no server-side data for us to access, correct, or delete on your behalf. Uninstalling the app from your device removes all data the app has stored.

If you are located in the European Economic Area, the United Kingdom, California, or another jurisdiction with similar privacy laws, you have certain rights regarding personal information about you. Because SuperTranslator processes data only on your device and we do not receive or store it, those rights are practically satisfied by your own control over the data on your device.

## Beta program

The "SuperTranslator TEST" build distributed via TestFlight is a research preview. Apple's TestFlight program is governed by Apple's separate [TestFlight terms](https://www.apple.com/legal/internet-services/itunes/testflight/) and [Apple's privacy policy](https://www.apple.com/legal/privacy/). When you use TestFlight, Apple may collect crash reports and usage statistics on our behalf as described in those documents; SuperTranslator itself does not collect this data.

## Changes to this policy

If we change this policy, we will update the "Last updated" date at the top of this page. Material changes will be highlighted in the app's release notes on TestFlight or the App Store.

## Contact

For questions about this policy or the app, contact:

**Email:** wizard_files3@yahoo.com

---

*This policy applies to the SuperTranslator iOS app and the "SuperTranslator TEST" TestFlight build with bundle identifier `com.SuperTranslator.SuperTranslator6`.*
