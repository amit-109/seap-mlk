import facultyRegistrationVideo from "../assets/Facultyregistrationlogin.mp4";
import studentLoginVideo from "../assets/student-login.mp4";

// Supported sources: a direct video file URL, or a YouTube/Vimeo embed URL.
export const videos = [
  {
    id: "Faculty",
    title: "Faculty registration and login",
    description: "Faculty onboarding, institution code, OTP verification and profile completion.",
    audience: "Faculty",
    url: facultyRegistrationVideo,
    format: "video",
  },
  {
    id: "Student",
    title: "Student registration and login",
    description: "How students join a faculty-created batch and access their learning.",
    audience: "Students",
    url: studentLoginVideo,
    format: "video",
  },
];
