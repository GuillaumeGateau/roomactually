<template>
  <div class="faq">
    <section class="faq-hero">
      <div class="container">
        <h1 class="faq-title">RoomActually Frequently Asked Questions</h1>
      </div>
    </section>

    <section class="faq-content">
      <div class="container">
        <div class="faq-list">
          <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
            <h2 class="faq-question">{{ item.question }}</h2>
            <p class="faq-answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-footer">
      <div class="container">
        <p class="footer-text">RoomActually Powered by RoomActually © | All rights reserved</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      faqItems: [
        {
          question: "1 - I am a landlord, do I have to pay to list on RoomActually?",
          answer: "No! Landlords can list and market their rooms to any University hosted by RoomActually. However, each university has the ability to accept or reject a room listed through the platform. The more pictures and the better the description, the higher your odds of getting accepted and finding good renters!"
        },
        {
          question: "2 - What is RoomActually?",
          answer: "RoomActually is a white-labelled platform for universities to offer a broad range of housing options to their students. Students may search, filter and apply for these different options all through this common, university branded platform. Landlords on the other hand may list directly through the university's site, or list through www.roomactually.com and use the platform as a channel manager to list their room across several different universities. Occasionally, landlords and students can also crosslist their room on our partner websites."
        },
        {
          question: "3 - Who should I contact if I have a question?",
          answer: "All questions may be directed to our support team at hello(at)roomactually.com. We try to answer all questions and concerns within 24 hours. If you have an urgent question, mark it as urgent in the subject line and we will try to get to your concern ASAP."
        },
        {
          question: "4 - Why should I list a room here?",
          answer: "RoomActually gives landlords direct and exclusive access to the student rental market like no other platform. Since all apartments show up in the universities branded website, there is a much higher level of trust from the students. Our system of checks and balances offer protection to both students and landlords. These protections result in more responsible renters, more selection of applicants and potentially higher rental rates as opposed to platforms open to the public."
        },
        {
          question: "5 - Why rent to students?",
          answer: "Students are often the best renters as they have dependable financial backers in the form of their parents and renter insurance. Not only that, but students are deeply involved in their studies and often respect their surroundings. Landlords do not need to try to impress the tenant with expensive furniture and fixtures - the basics will do just fine. The turnover of apartments is more frequent, lowering the risk of getting stuck with a bad renter. Furthermore, students often pass their apartments on to other friends, requiring them to keep good relations with their landlord and in turn increasing the occupancy rate of the apartment."
        },
        {
          question: "6 - I am a student and I want to rent out a room in my flatshare. Can I list on RoomActually?",
          answer: "Absolutely! If your school uses our solution, you may list your room directly through your universities site or you may list through the RoomActually main site. However, RoomActually does not review its client's contracts and will not be responsible for the local laws and regulations of subletting a room. Students and landlords alike should review their contracts and assure that they may legally rent or sub-rent their room before listing on RoomActually."
        },
        {
          question: "7 - Is it safe for me to give my information here?",
          answer: "Completely! Our solution is hosted by Amazon Web Services and we benefit from the protection of the leading web hosting partner in the world. Your data is as safe as it can get!"
        },
        {
          question: "8 - Who can access my profile?",
          answer: "Universities that you list your room on may have access to your profile information. Students will have limited access to information to contact you, but will not see your full profile. Once the booking has been confirmed, we share more complete information on the renter and the landlord so that they may finalize the contract."
        },
        {
          question: "9 - What does this cost?",
          answer: "Listing a room is 100% FREE for both landlords and students."
        },
        {
          question: "10 - Do you handle contracts?",
          answer: "RoomActually does not currently take responsibility for contracts. This is between the student and the landlord. However, if you ask us, we may send you some generic government approved templates to use for your rental!"
        },
        {
          question: "11 - Do you handle payments?",
          answer: "RoomActually does not currently process payments."
        },
        {
          question: "12 - Can I choose my tenant?",
          answer: "Yes! You can choose a tenant whenever you like. We strongly urge you to reject and accept offers as they come in. If you wait too long to accept a student, they may find other options. Once you have accepted a student, you must register the booking to make the listing not appear in the search results. However, once you have a student, you can go ahead and list the room for the next period of time. Maybe you will get a renter well in advance!"
        },
        {
          question: "13 - How difficult is it to list a room?",
          answer: "It couldn't be easier. It is three simple steps (address, details, description) and then you upload photos and you are done. To upload a room, it should only take about 5 minutes. The more details you give in the description, the better your odds of renting your room are. Not only that, but we offer the ability to list your room in several languages. With the number of study abroad students using our system, listing in other languages may improve your odds of renting your room."
        },
        {
          question: "14 - Can I rent a room for any period of time or is there a minimum?",
          answer: "There is no limitations on the period of time you rent your room."
        },
        {
          question: "15 - Can I rent out a room long term?",
          answer: "Yes. You have full control of your rental periods."
        },
        {
          question: "16 - Does this platform allow to rent exclusively to students?",
          answer: "Our platform is for apartments to rent exclusively to students and staff of the universities that we are hosting. Non-hosted schools students may not access the system. This helps us to ensure that any student that contacts you is exactly who they say they are."
        },
        {
          question: "17 - What happens if my room is rejected?",
          answer: "To avoid scams or poor apartments, we have given universities the ability to reject any listing coming either directly from their site or from www.roomactually.com. When the room is rejected, the university may contact you to tell you why your room is rejected, but they are not obliged. You may edit and resubmit your room. Fingers crossed!"
        },
        {
          question: "18 - When does my room go live?",
          answer: "As soon as the university accepts your listing it will be live on the site. This may vary by universities business rules for accepting rooms, but it could be almost instantaneously."
        },
        {
          question: "19 - What does \"in review\" mean?",
          answer: "Before a room goes live, it must be approved by the university's housing team. Until it has been reviewed, the listing will not be seen on the university's website. A room may be accepted by some universities and rejected by others."
        },
        {
          question: "20 - What if I already have a database of landlords for my school?",
          answer: "As a part of the RoomActually offering, we cleanse and migrate all of your current data into our system. We also provide additional consulting services on how to find new landlords, how to get existing landlords to improve the quality of their listing and how to promote your new service to your students."
        },
        {
          question: "21 - Why should I fill my profile?",
          answer: "The best way to answer this question is to ask it to yourself. Would I be more likely to rent a room if I know more about the room and the landlord? Usually the answer is yes. Don't worry, we are not going to share your information with anyone. Landlord details are hidden from the student until the final booking is confirmed. All communication over the site is anonymous until the application process. Filling in your profile will also improve your chances of being accepted by a university."
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq {
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

/* FAQ Hero Section */
.faq-hero {
  padding: var(--spacing-2xl) var(--spacing-xl);
  background: var(--color-light-grey);
  text-align: center;
}

.faq-title {
  font-size: var(--font-size-5xl);
  color: var(--color-text-dark);
  font-weight: var(--font-weight-bold);
  margin-bottom: 0;
}

/* FAQ Content Section */
.faq-content {
  padding: var(--spacing-2xl) var(--spacing-xl);
  background: var(--color-white);
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-light-grey);
}

.faq-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.faq-question {
  font-size: var(--font-size-xl);
  color: var(--color-text-dark);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-relaxed);
}

.faq-answer {
  font-size: var(--font-size-base);
  color: var(--color-text-dark);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
}

/* FAQ Footer Section */
.faq-footer {
  padding: var(--spacing-xl) var(--spacing-xl);
  background: var(--color-light-grey);
  text-align: center;
}

.footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .faq-title {
    font-size: var(--font-size-3xl);
  }

  .faq-hero,
  .faq-content,
  .faq-footer {
    padding: var(--spacing-xl) var(--spacing-md);
  }

  .faq-item {
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-lg);
  }

  .faq-question {
    font-size: var(--font-size-lg);
  }
}
</style>

