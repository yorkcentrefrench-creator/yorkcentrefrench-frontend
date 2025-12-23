import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CourseInfo from "./pages/CourseInfo";
import WhatsappCommunity from "./pages/whatsapp-community";
import PrivacyPolicy from "./component/PrivacyPolicy";
import TermsAndConditions from "./component/TermsAndConditions";
import Beginner from "./pages/Beginner";
import Intermediate from "./pages/Intermediate";
import Professional from "./pages/Professional";
import GroupClasses from "./pages/GroupClasses";
import PrivateTutoring from "./pages/PrivateTutoring";
import ProfessionalTEF from "./pages/ProfessionalTEF";
import ExamPrep from "./pages/ExamPrep";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQSection from "./component/FAQSection";
import AboutUs from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/course-info" element={<CourseInfo />} />
        <Route path="/whatsapp-community" element={<WhatsappCommunity />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/group-classes" element={<GroupClasses />} />
        <Route path="/private-tutoring" element={<PrivateTutoring />} />
        <Route path="/professional-tef" element={<ProfessionalTEF />} />
        <Route path="/exam-preparation" element={<ExamPrep />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQSection/>} />
        <Route path="/about" element={<AboutUs/>} />




      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
