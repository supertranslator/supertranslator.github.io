# Privacy Policy for Dog Translator (by SuperTranslator)

**Effective date:** 2026-05-27
**Last updated:** 2026-10-02

This Privacy Policy describes how the Dog Translator iOS app by SuperTranslator Inc. ("**Dog Translator**", "**the app**", "**we**", "**us**") handles information when you use it. It applies to the App Store release (listed as "Dog Translation") and to the earlier "SuperTranslator TEST" TestFlight preview.

## Summary

- SuperTranslator runs entirely **on your device**. It does **not** send your videos, photos, profile information, or any other personal data to us or to any third party.
- We do **not** collect, store, sell, or share any personal information.
- We do **not** use tracking or advertising SDKs.
- The app sends **anonymous usage counts** (for example how often Live or Upload is used) to TelemetryDeck, a privacy-focused analytics service. These counts contain no personal information, no video, no audio and no translation text, and you can turn them off in the app at any time (see "Anonymous usage statistics" below).
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

Dog Translator analyzes videos and the live camera feed using machine learning models that ship inside the app and run entirely on your device. No video frames, audio samples, pose data, or interpretations are sent to us, to Apple, or to any other server for processing.

## Internet access

The app makes only one kind of network request of its own: the anonymous usage counts described under "Anonymous usage statistics", sent to TelemetryDeck over an encrypted connection. No video, audio, images, pose data or translations are ever sent anywhere.

Other than that, the app opens an internet destination only when **you tap a button** that explicitly does so:

- Tapping a link to `https://supertranslator.ai` opens it in your default browser.
- Tapping a research citation opens the publication's page in your default browser.
- Tapping a share button hands the rendered video to the iOS share sheet; the app you choose there handles it.
- Tapping "Open Settings" in a permission alert opens iOS's Settings app.

In each case the destination app (Safari, the share target, Settings) handles the request, not Dog Translator, and is governed by its own privacy policy.

## Sharing rendered videos

When you tap **Share** on the result screen, SuperTranslator renders a new video file that contains your original clip plus an on-screen caption track, a SuperTranslator watermark, and a QR code. The rendered file is saved to your Photos library and handed to the iOS share sheet. **What you do with that file from there is entirely your choice** — SuperTranslator does not upload it anywhere.

## Anonymous usage statistics

To understand which features are used and improve the app, Dog Translator counts feature use (for example app opens, Live sessions, video uploads, shares, and whether the Correct or Wrong button was tapped) and sends these counts to [TelemetryDeck](https://telemetrydeck.com), a privacy-focused analytics service based in Germany.

- These counts contain **no personal information, no video, no audio, no images and no translation text**. Numbers such as session length are sent only as coarse ranges (for example "1-5 minutes").
- The only identifier is a **random code created by the app on first launch**. It is not your Apple ID, not your device's advertising identifier, and it is not linked to you. TelemetryDeck additionally hashes it before storing it.
- Along with each count, TelemetryDeck's library records the app version, iOS version, device model and language, which it uses only to produce aggregate statistics.
- The data is used **only for analytics**, never for advertising or tracking across apps.
- **You can turn this off at any time** in the app under Profile → Settings → "Share usage statistics". Turning it off stops all sending and deletes the random code.

TelemetryDeck's own privacy practices are described in its [privacy policy](https://telemetrydeck.com/privacy/).

## Children's privacy

Dog Translator is not directed at children under the age of 13. We do not knowingly collect any information from children.

## Third-party services

Dog Translator uses Apple's first-party iOS frameworks (Vision, Sound Analysis, AVFoundation, PhotosUI, Foundation Models, Core ML, SwiftUI) for all analysis, which happens on your device. The only third-party component is the TelemetryDeck analytics library described under "Anonymous usage statistics". The app embeds no advertising, crash-reporting, or other SDKs.

## Your rights

Because Dog Translator does not collect or transmit personal information, there is no server-side data about you for us to access, correct, or delete. The anonymous usage counts cannot be linked to you. Uninstalling the app from your device removes all data the app has stored.

If you are located in the European Economic Area, the United Kingdom, California, or another jurisdiction with similar privacy laws, you have certain rights regarding personal information about you. Because SuperTranslator processes data only on your device and we do not receive or store it, those rights are practically satisfied by your own control over the data on your device.

## Beta program

The "SuperTranslator TEST" build distributed via TestFlight is a research preview. Apple's TestFlight program is governed by Apple's separate [TestFlight terms](https://www.apple.com/legal/internet-services/itunes/testflight/) and [Apple's privacy policy](https://www.apple.com/legal/privacy/). When you use TestFlight, Apple may collect crash reports and usage statistics on our behalf as described in those documents; SuperTranslator itself does not collect this data.

## Changes to this policy

If we change this policy, we will update the "Last updated" date at the top of this page. Material changes will be highlighted in the app's release notes on TestFlight or the App Store.

## Contact

For questions about this policy or the app, contact:

**Email:** wizard_files3@yahoo.com

---

*This policy applies to the Dog Translator iOS app (App Store listing "Dog Translation") and the "SuperTranslator TEST" TestFlight build, bundle identifier `com.SuperTranslator.SuperTranslator6`.*
