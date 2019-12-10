import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import styles from '../css/useragreement.module.css'
import img1 from '../images/congo.png'


class UserAgreement extends Component {

    render() {
        return (
            <>
                {/* HEADER */}
                <header className={styles.Header}>
                    {/* USER AGREEMENT */}
                    <div className='row'>
                        {/* Title */}
                        <div className='column column-1'>
                            <h2>KinId User Agreement</h2>
                        </div>
                    </div>
                </header>
                {/* MAIN */}
                <main className={styles.Main}>
                    {/* SECTION - EFFECTIVE */}
                    <section>
                        {/* Effective */}
                        <div className='row'>
                            {/* Description */}
                            <div className='column column-1'>
                                <p><i>Effective on December 12/07/2019</i></p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION - MISSION AND TABLE OF CONTENT */}
                    <section className={styles.table_of_content}>
                        <div className='row'>
                            {/* Mission */}
                            <div className='column column-3'>
                                <p>Our mission is to connect Congolese professionals to allow them to be more productive and successful. Our services are designed to promote economic opportunity for our members by enabling you and millions of other professionals to meet, exchange ideas, learn, and find opportunities or employees, work, and make decisions in a network of trusted relationships.</p>
                            </div>
                        {/* Table of Content */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h2>Table of Content:</h2>
                                {/* List */}
                                <ol>
                                    <li><a href='#introduction'>Introduction</a></li>
                                    <li><a href='#obligations'>Obligations</a></li>
                                    <li><a href='#rights'>Rights and Limits</a></li>
                                    <li><a href='#disclaimer'>Disclaimer and limit of Liability</a></li>
                                    <li><a href='#termination'>Termination</a></li>
                                    <li><a href='#governing'>Governing Law and Dispute Resolution</a></li>
                                    <li><a href='#general'>General Terms</a></li>
                                    <li><a href='#kinid'>KinId "Dos and Don'ts"</a></li>
                                    <li><a href='#complaints'>Complaints Regarding Content</a></li>
                                    <li><a href='#how'>How To Contact Us</a></li>
                                </ol>
                            </div>
                        </div>                    
                    </section>
                    {/* SECTION 1 - INTRODUCTION */}
                    <section id='introduction' className={styles.common_content}>
                        <div className='row'>
                            {/* Introduction */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>1. Introduction</h3>
                                {/* Sub-Title */}
                                <h4>1.1. Contract</h4>
                                {/* Description */}
                                <p>You agree that by clicking "Join Now", "Join KinId", "Sign Up" or similar, registering, accessing or using our services (described below), you are agreeing to enter into a legally binding contract with KinId (even if you are using our Services on behalf of a company). If you do not agree to this contract ("Contract" or "User Agreement"), do not click "Join Now" (or similar) and do not access or otherwise use any of our Services. If you wish to terminate this contract, at any time you can do so by closing your account and no longer accessing or using our Services.</p>
                                {/* Services */}
                                <h5>Services</h5>
                                {/* Description */}
                                <p>This Contract applies to KinId.com, KinId-branded apps, Slideshare, KinId Learning and other KinId-related sites, apps, communications and other services that state that they are offered under this Contract ("Services"), including the offsite collection of data for those Services, such as our ads and the "Apply with KinId" and "Share with KinId" plugins. Registered users of our Services are "Members" and unregistered users are "Visitors". This Contract applies to both Members and Visitors.</p>
                                {/* KinId */}
                                <h5>KinId</h5>
                                {/* Description */}
                                <p>You are entering into this Contract with KinId (also referred to as "we" and "us").</p>
                                <p>We use the term "Designated Countries" to refer to countries in the European Union (EU), European Economic Area (EEA), and Switzerland.</p>
                                <p>If you reside in the "Designated Countries", you are entering into this Contract with KinId Ireland Unlimited Company ("KinId Ireland") and KinId Ireland will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
                                <p>If you reside outside of the "Designated Countries", you are entering into this Contract with KinId Corporation ("KinId Corp.") and KinId Corp. will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>When you use our Services you agree to all of these terms. Your use of our Services is also subject to our Cookie Policy and our Privacy Policy, which covers how we collect, use, share, and store your personal information.</p>
                            </div>
                            {/* Members and Visitors */}
                            <div className='column column-2'>
                                <h4>1.2. Members and Visitors</h4>
                                {/* Description */}
                                <p>When you register and join the KinId Service or become a registered user on SlideShare, you become a Member. If you have chosen not to register for our Services, you may access certain features as a "Visitor."</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>This Contract applies to Members and Visitors.</p>
                            </div>
                            {/* Change */}
                            <div className='column column-2'>
                                <h4>1.3. Change</h4>
                                {/* Description */}
                                <p>We may modify this Contract, our Privacy Policy and our Cookies Policies from time to time. If we make material changes to it, we will provide you notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. We agree that changes cannot be retroactive. If you object to any changes, you may close your account. Your continued use of our Services after we publish or send a notice about our changes to these terms means that you are consenting to the updated terms.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>This Contract applies to Members and Visitors.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 2 - OBLIGAGTIONS  */}
                    <section id='obligations' className={styles.common_content}>
                        {/* Obligations */}
                        <div className='row'>
                            {/* Section 2 */}
                            <div className='column column-2'>
                                {/* Title - Obligation */}
                                <h3>2. Obligations</h3>
                                {/* Sub-Title - Service Eligibility */}
                                <h4>2.1. Service Eligibility</h4>
                                {/* Description */}
                                <p>The Services are not for use by anyone under the age of 16.</p>
                                <p>To use the Services, you agree that: (1) you must be the "Minimum Age" (described below) or older; (2) you will only have one KinId account (and/or one SlideShare account, if applicable), which must be in your real name; and (3) you are not already restricted by KinId from using the Services. Creating an account with false information is a violation of our terms, including accounts registered on behalf of others or persons under the age of 16.</p>
                                <p>"Minimum Age" means 16 years old. However, if law requires that you must be older in order for KinId to lawfully provide the Services to you without parental consent (including using of your personal data) then the Minimum Age is such older age.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>Here are some promises that you make to us in this Contract:</p>
                                <p>You're eligible to enter into this Contract and you are at least our "Minimum Age."</p>
                            </div>
                            {/* Section 2.2  */}
                            <div className='column column-2'>
                                {/* Sub-Title - Your Account */}
                                <h4>2.2. Your Account</h4>
                                {/* Description */}
                                <p>Members are account holders. You agree to: (1) try to choose a strong and secure password; (2) keep your password secure and confidential; (3) not transfer any part of your account (e.g., connections) and (4) follow the law and our list of Dos and Don'ts and Professional Community Policies. You are responsible for anything that happens through your account unless you close it or report misuse.</p>
                                <p>As between you and others (including your employer), your account belongs to you. However, if the Services were purchased by another party for you to use (e.g. Recruiter seat bought by your employer), the party paying for such Service has the right to control access to and get reports on your use of such paid Service; however, they do not have rights to your personal account.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>You will keep your password a secret.</p>
                                <p>You will not share an account with anyone else and will follow our rules and the law.</p>
                            </div>
                            {/* Section 2.3  */}
                            <div className='column column-2'>
                                {/* Sub-Title - Payment */}
                                <h4>2.3. Payment</h4>
                                {/* Description */}
                                <p>If you buy any of our paid Services ("Premium Services"), you agree to pay us the applicable fees and taxes and to additional terms specific to the paid Services. Failure to pay these fees will result in the termination of your paid Services. Also, you agree that:</p>
                                {/* List */}
                                <ul>
                                    <li>Your purchase may be subject to foreign exchange fees or differences in prices based on location (e.g. exchange rates).</li>
                                    <li>We may store and continue billing your payment method (e.g. credit card) even after it has expired, to avoid interruptions in your Services and to use to pay other Services you may buy.</li>
                                    <li>We may store and continue billing your payment method (e.g. credit card) even after it has expired, to avoid interruptions in your Services and to use to pay other Services you may buy.</li>
                                    <li>If you purchase a subscription, your payment method automatically will be charged at the start of each subscription period for the fees and taxes applicable to that period. To avoid future charges, cancel before the renewal date. Learn how to cancel or suspend your Premium Services.</li>
                                    <li>All of your purchases of Services are subject to KinId's refund policy.</li>
                                    <li>We may calculate taxes payable by you based on the billing information that you provide us at the time of purchase.</li>
                                </ul>
                                <p>You can get a copy of your invoice through your KinId account settings under "Purchase History".</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>You'll honor your payment obligations and you are okay with us storing your payment information. You understand that there may be fees and taxes that are added to our prices.</p>
                                <p>We don't guarantee refunds.</p>
                            </div>
                            {/* Section 2.4  */}
                            <div className='column column-2'>
                                {/* Sub-Title - Notice and Messages */}
                                <h4>2.4. Notice and Messages</h4>
                                {/* Description */}
                                <p>You agree that we will provide notices and messages to you in the following ways: (1) within the Service, or (2) sent to the contact information you provided us (e.g., email, mobile number, physical address). You agree to keep your contact information up to date.</p>
                                <p>Please review your settings to control and limit messages you receive from us.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>You're okay with us providing notices and messages to you through our websites, apps, and contact information. If your contact information is out of date, you may miss out on important notices.</p>
                                <p>We don't guarantee refunds.</p>
                            </div>
                            {/* Section 2.5  */}
                            <div className='column column-2'>
                                {/* Sub-Title - Sharing */}
                                <h4>2.5. Sharing</h4>
                                {/* Description */}
                                <p>Our Services allow messaging and sharing of information in many ways, such as your profile, slide decks, links to news articles, job postings, InMails and blogs. Information and content that you share or post may be seen by other Members, Visitors or others (including off of the Services). Where we have made settings available, we will honor the choices you make about who can see content or information (e.g., message content to your addressees, sharing content only to KinId connections, restricting your profile visibility from search engines, or opting not to notify others of your KinId profile update). For job searching activities, we default to not notifying your connections network or the public. So if you apply for a job through our Service or opt to signal that you are interested in a job, our default is to share it only with the job poster.</p>
                                <p>We are not obligated to publish any information or content on our Service and can remove it in our sole discretion, with or without notice.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>When you share information on our Services, others can see, copy and use that information.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 3 - RIGHTS AND LIMITS */}
                    <section id='rights' className={styles.common_content}>
                        {/* Rights and Limits */}
                        <div className='row'>
                            {/* Section 3 */}
                            <div className='column column-2'>
                                {/* Title - Right and Limits */}
                                <h3>3. Rights and Limits</h3>
                                {/* Sub-Title - Your License to KinId */}
                                <h4>3.1. Your License to KinId</h4>
                                {/* Description */}
                                <p>As between you and KinId, you own the content and information that you submit or post to the Services, and you are only granting KinId and our affiliates the following non-exclusive license:</p>
                                <p>A worldwide, transferable and sublicensable right to use, copy, modify, distribute, publish, and process, information and content that you provide through our Services and the services of others, without any further consent, notice and/or compensation to you or others. These rights are limited in the following ways:</p>
                                {/* Lists */}
                                <ul>
                                    <li>You can end this license for specific content by deleting such content from the Services, or generally by closing your account, except (a) to the extent you shared it with others as part of the Service and they copied, re-shared it or stored it and (b) for the reasonable time it takes to remove from backup and other systems.</li>
                                    <li>We will not include your content in advertisements for the products and services of third parties to others without your separate consent (including sponsored content). However, we have the right, without payment to you or others, to serve ads near your content and information, and your social actions may be visible and included with ads, as noted in the Privacy Policy.</li>
                                    <li>We will get your consent if we want to give others the right to publish your content beyond the Services. However, if you choose to share your post as "public", we will enable a feature that allows other Members to embed that public post onto third-party services, and we enable search engines to make that public content findable though their services. Learn More</li>
                                    <li>While we may edit and make format changes to your content (such as translating it, modifying the size, layout or file type or removing metadata), we will not modify the meaning of your expression.</li>
                                    <li>Because you own your content and information and we only have non-exclusive rights to it, you may choose to make it available to others, including under the terms of a <a href='#'>Creative Commons license.</a></li>
                                </ul>
                                <p>You and KinId agree that we may access, store, process and use any information and personal data that you provide in accordance with the terms of the Privacy Policy and your choices (including settings).</p>
                                <p>By submitting suggestions or other feedback regarding our Services to KinId, you agree that KinId can use and share (but does not have to) such feedback for any purpose without compensation to you.</p>
                                <p>You agree to only provide content or information that does not violate the law nor anyone's rights (including intellectual property rights). You also agree that your profile information will be truthful. KinId may be required by law to remove certain information or content in certain countries.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>You own all of the content, feedback, and personal information you provide to us, but you also grant us a non-exclusive license to it.</p>
                                <p>We'll honor the choices you make about who gets to see your information and content, including how it can be used for ads.</p>
                                <p>You and KinId agree that if content includes personal data, it is subject to our Privacy Policy.</p>
                                <p>You promise to only provide information and content that you have the right to share, and that your KinId profile will be truthful.</p>
                            </div>
                            {/* Section 3.2 */}
                            <div className='column column-2'>
                                {/* Sub-Title - Service Evalability */}
                                <h4>3.2. Service Availability</h4>
                                {/* Description */}
                                <p>We may change or discontinue any of our Services. We don't promise to store or keep showing any information and content that you've posted.</p>
                                <p>KinId is not a storage service. You agree that we have no obligation to store, maintain or provide you a copy of any content or information that you or others provide, except to the extent required by applicable law and as noted in our Privacy Policy.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>We may change, suspend or end any Service, or change and modify prices prospectively in our discretion. To the extent allowed under law, these changes may be effective upon notice provided to you.</p>
                            </div>
                            {/* Section 3.3 */}
                            <div className='column column-2'>
                                {/* Sub-Title - Other Content, Sites and Apps */}
                                <h4>3.3. Other Content, Sites and Apps</h4>
                                {/* Description */}
                                <p>By using the Services, you may encounter content or information that might be inaccurate, incomplete, delayed, misleading, illegal, offensive or otherwise harmful. KinId generally does not review content provided by our Members or others. You agree that we are not responsible for others' (including other Members') content or information. We cannot always prevent this misuse of our Services, and you agree that we are not responsible for any such misuse. You also acknowledge the risk that you or your organization may be mistakenly associated with content about others when we let connections and followers know you or your organization were mentioned in the news. Members have choices about this feature.</p>
                                <p>You are responsible for deciding if you want to access or use third-party apps or sites that link from our Services. If you allow a third-party app or site to authenticate you or connect with your KinId account, that app or site can access information on KinId related to you and your connections. Third-party apps and sites have their own legal terms and privacy policies, and you may be giving others permission to use your information in ways we would not. Except to the limited extent it may be required by applicable law, KinId is not responsible for these other sites and apps - use these at your own risk. Please see our <a href='#'>Privacy Policy</a>.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>Your use of others' content and information posted on our Services, is at your own risk.</p>
                                <p>Others may offer their own products and services through our Services, and we aren't responsible for those third-party activities.</p>
                            </div>
                            {/* Section 3.4*/}
                            <div className='column column-2'>
                                {/* Sub-Title - Limits */}
                                <h4>3.4. Limits</h4>
                                {/* Description */}
                                <p>KinId reserves the right to limit your use of the Services, including the number of your connections and your ability to contact other Members. KinId reserves the right to restrict, suspend, or terminate your account if KinId believes that you may be in breach of this Contract or law or are misusing the Services (e.g., violating any of the Dos and Don'ts or Professional Community Policies).</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>We have the right to limit how you connect and interact on our Services.</p>
                            </div>
                            {/* Section 3.5*/}
                            <div className='column column-2'>
                                {/* Sub-Title - Intellectual Property Rights */}
                                <h4>3.5. Intellectual Property Rights</h4>
                                {/* Description */}
                                <p>KinId reserves all of its intellectual property rights in the Services. Using the Services does not give you any ownership in our Services or the content or information made available through our Services. Trademarks and logos used in connection with the Services are the trademarks of their respective owners. KinId, SlideShare, and "in" logos and other KinId trademarks, service marks, graphics, and logos used for our Services are trademarks or registered trademarks of KinId.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>We're providing you notice about our intellectual property rights.</p>
                            </div>
                            {/* Section 3.6*/}
                            <div className='column column-2'>
                                {/* Sub-Title - Automated Processing */}
                                <h4>3.6. Automated Processing</h4>
                                {/* Description */}
                                <p>We will use the information and data that you provide and that we have about Members to make recommendations for connections, content and features that may be useful to you. For example, we use data and information about you to recommend jobs to you and you to recruiters. Keeping your profile accurate and up-to-date helps us to make these recommendations more accurate and relevant.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>We use data and information about you to make relevant suggestions to you and others.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 4 - DISCLAIMER AND LIMIT OF LIABILITY */}
                    <section id='disclaimer' className={styles.common_content}>
                        {/* Termination */}
                        <div className='row'>
                            {/* Section 4 */}
                            <div className='column column-2'>
                                {/* SubSub-Title - Termination */}
                                <h3>4. Disclaimer and Limit of Liability</h3>
                                {/* Description */}
                                <p>TO THE EXTENT PERMITTED UNDER LAW (AND UNLESS KinId HAS ENTERED INTO A SEPARATE WRITTEN AGREEMENT THAT OVERRIDES THIS CONTRACT), KinId AND ITS AFFILIATES (AND THOSE THAT KinId WORKS WITH TO PROVIDE THE SERVICES) SHALL NOT BE LIABLE TO YOU OR OTHERS FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, OPPORTUNITIES, REPUTATION, PROFITS OR REVENUES, RELATED TO THE SERVICES (E.G. OFFENSIVE OR DEFAMATORY STATEMENTS, DOWN TIME OR LOSS, USE OF, OR CHANGES TO, YOUR INFORMATION OR CONTENT).</p>
                                <p>IN NO EVENT SHALL THE LIABILITY OF KinId AND ITS AFFILIATES (AND THOSE THAT KinId WORKS WITH TO PROVIDE THE SERVICES) EXCEED, IN THE AGGREGATE FOR ALL CLAIMS, AN AMOUNT THAT IS THE LESSER OF (A) FIVE TIMES THE MOST RECENT MONTHLY OR YEARLY FEE THAT YOU PAID FOR A PREMIUM SERVICE, IF ANY, OR (B) US $1000.</p>
                                <p>THIS LIMITATION OF LIABILITY IS PART OF THE BASIS OF THE BARGAIN BETWEEN YOU AND KinId AND SHALL APPLY TO ALL CLAIMS OF LIABILITY (E.G. WARRANTY, TORT, NEGLIGENCE, CONTRACT, LAW) AND EVEN IF KinId OR ITS AFFILIATES HAS BEEN TOLD OF THE POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF THESE REMEDIES FAIL THEIR ESSENTIAL PURPOSE.</p>
                                <p>SOME LAWS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY, SO THESE LIMITS MAY NOT APPLY TO YOU.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>These are the limits of legal liability we may have to you.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 5 - TERMINATION */}
                    <section id='termination' className={styles.common_content}>
                        {/* Termination */}
                        <div className='row'>
                            {/* Section 5 */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>5. Termination</h3>
                                {/* Description */}
                                <p>Both you and KinId may terminate this Contract at any time with notice to the other. On termination, you lose the right to access or use the Services. The following shall survive termination:</p>
                                {/* Lists */}
                                <ul>
                                    <li>Our rights to use and disclose your feedback;</li>
                                    <li>Members and/or Visitors' rights to further re-share content and information you shared through the Service to the extent copied or re-shared prior to termination;</li>
                                    <li>Sections 4, 6, 7, and 8.2 of this Contract;</li>
                                    <li>Any amounts owed by either party prior to termination remain owed after termination.</li>
                                </ul>
                                <p>You can visit our <a href=''>Help Center</a> to close your account.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>We can each end this Contract anytime we want.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 6 - GOVERNING LAW AND DISPUTE RESOLUTION  */}
                    <section id='governing' className={styles.common_content}>
                        {/* Governing Law and Dispute Resolution */}
                        <div className='row'>
                            {/* Section 6 */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>6. Governing Law and Dispute Resolution</h3>
                                {/* Excerpt */}
                                <p>For others outside of Designated Countries, including those who live outside of the United States: You and KinId agree that the laws of the State of Georgia, U.S.A., excluding its conflict of laws rules, shall exclusively govern any dispute relating to this Contract and/or the Services. You and KinId both agree that all claims and disputes can be litigated only in the federal or state courts in DeKalb County, Georgia, USA, and you and KinId each agree to personal jurisdiction in those courts.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>In the unlikely event we end up in a legal dispute, KinId and you agree to resolve it in Georgia courts using Georgia.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 7 - GENERAL TERMS*/}
                    <section id='general' className={styles.common_content}>
                        {/* General */}
                        <div className='row'>
                            {/* Section 7 */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>7. General Terms</h3>
                                {/* Description */}
                                <p>If a court with authority over this Contract finds any part of it unenforceable, you and we agree that the court should modify the terms to make that part enforceable while still achieving its intent. If the court cannot do that, you and we agree to ask the court to remove that unenforceable part and still enforce the rest of this Contract.</p>
                                <p>To the extent allowed by law, the English language version of this Contract is binding and other translations are for convenience only. This Contract (including additional terms that may be provided by us when you engage with a feature of the Services) is the only agreement between us regarding the Services and supersedes all prior agreements for the Services.</p>
                                <p>If we don't act to enforce a breach of this Contract, that does not mean that KinId has waived its right to enforce this Contract. You may not assign or transfer this Contract (or your membership or use of Services) to anyone without our consent. However, you agree that KinId may assign this Contract to its affiliates or a party that buys it without your consent. There are no third-party beneficiaries to this Contract.</p>
                                <p>You agree that the only way to provide us legal notice is at the addresses provided in Section 10.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>Here are some important details about the Contract.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 8 - KINID DOS AND DONTS */}
                    <section id='kinid' className={styles.common_content}>
                        {/* KinId Dos and Don'ts */}
                        <div className='row'>
                            {/* Section 8 */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>8. KinId "Dos and Don'ts" </h3>
                                {/* Sub-Title */}
                                <h4>8.1. Dos</h4>
                                {/* Description */}
                                <p>You agree that you will:</p>
                                {/* List */}
                                <ol type="a">
                                    <li>Comply with all applicable laws, including, without limitation, privacy laws, intellectual property laws, anti-spam laws, export control laws, tax laws, and regulatory requirements;</li>
                                    <li>Provide accurate information to us and keep it updated;</li>
                                    <li>Use your real name on your profile; and</li>
                                    <li>Use the Services in a professional manner.</li>
                                </ol>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>KinId is a community of professionals. This list of "Dos and Don'ts" along with our Professional Community Policies limit what you can and cannot do on our Services.</p>
                            </div>
                            {/* Section 8.2 */}
                            <div className='column column-2'>
                                {/* Sub-Title */}
                                <h4>8.2. Don'ts</h4>
                                {/* Description */}
                                <p>You agree that you will not:</p>
                                {/* Lists */}
                                <ol type='a'>
                                    <li>Create a false identity on KinId, misrepresent your identity, create a Member profile for anyone other than yourself (a real person), or use or attempt to use another's account;</li>
                                    <li>Develop, support or use software, devices, scripts, robots, or any other means or processes (including crawlers, browser plugins and add-ons, or any other technology) to scrape the Services or otherwise copy profiles and other data from the Services;</li>
                                    <li>Override any security feature or bypass or circumvent any access controls or use limits of the Service (such as caps on keyword searches or profile views);</li>
                                    <li>Copy, use, disclose or distribute any information obtained from the Services, whether directly or through third parties (such as search engines), without the consent of KinId;</li>
                                    <li>Disclose information that you do not have the consent to disclose (such as confidential information of others (including your employer));</li>
                                    <li>Violate the intellectual property rights of others, including copyrights, patents, trademarks, trade secrets, or other proprietary rights. For example, do not copy or distribute (except through the available sharing functionality) the posts or other content of others without their permission, which they may give by posting under a Creative Commons license;</li>
                                    <li>Violate the intellectual property or other rights of KinId, including, without limitation, (i) copying or distributing our learning videos or other materials or (ii) copying or distributing our technology, unless it is released under open source licenses; (iii) using the word "KinId" or our logos in any business name, email, or URL except as provided in the Brand Guidelines;</li>
                                    <li>Post anything that contains software viruses, worms, or any other harmful code;</li>
                                    <li>Reverse engineer, decompile, disassemble, decipher or otherwise attempt to derive the source code for the Services or any related technology that is not open source;</li>
                                    <li>Imply or state that you are affiliated with or endorsed by KinId without our express consent (e.g., representing yourself as an accredited KinId trainer);</li>
                                    <li>Rent, lease, loan, trade, sell/re-sell or otherwise monetize the Services or related data or access to the same, without KinId's consent;</li>
                                    <li>Deep-link to our Services for any purpose other than to promote your profile or a Group on our Services, without KinId's consent;</li>
                                    <li>Use bots or other automated methods to access the Services, add or download contacts, send or redirect messages;</li>
                                    <li>Monitor the Services' availability, performance or functionality for any competitive purpose;</li>
                                    <li>Engage in "framing," "mirroring," or otherwise simulating the appearance or function of the Services;</li>
                                    <li>Overlay or otherwise modify the Services or their appearance (such as by inserting elements into the Services or removing, covering, or obscuring an advertisement included on the Services);</li>
                                    <li>Interfere with the operation of, or place an unreasonable load on, the Services (e.g., spam, denial of service attack, viruses, gaming algorithms); and/or</li>
                                    <li>Violate the Professional Community Policies or any additional terms concerning a specific Service that are provided when you sign up for or start using such Service.</li>
                                </ol>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>KinId is a community of professionals. This list of "Dos and Don'ts" along with our Professional Community Policies limit what you can and cannot do on our Services.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 9 - COMPLAINTS REGARDING CONTENT */}
                    <section id='complaints' className={styles.common_content}>
                        {/* Complaints Regarding Content */}
                        <div className='row'>
                            {/* Section 9 */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>9. Complaints Regarding Content </h3>
                                {/* Description */}
                                <p>We respect the intellectual property rights of others. We require that information posted by Members be accurate and not in violation of the intellectual property rights or other rights of third parties. We provide a policy and process for complaints concerning content posted by our Members.</p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>Contact information for complaint about content provided by our Members.</p>
                            </div>
                        </div>
                    </section>
                    {/* SECTION 10 - HOW TO CONTACT US */}
                    <section id='how' className={styles.common_content}>
                        {/* How to Contact Us */}
                        <div className='row'>
                            {/* Section 10 */}
                            <div className='column column-2'>
                                {/* Title */}
                                <h3>10. How To Contact Us </h3>
                                {/* Description */}
                                <p>If you want to send us notices or service of process, please contact us:</p>
                                <p><a href=''>Online</a> OR BY <a href=''>Email</a></p>
                            </div>
                            {/* Excerpt */}
                            <div className='column column-3'>
                                <p>Our Contact information. Our Help Center also provides information about our Services.</p>
                            </div>
                        </div>
                    </section>

                </main>
                {/* FOOTER */}
                <Footer />
            </>
            );
    }

}
export default UserAgreement;