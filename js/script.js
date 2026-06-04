// ========================= READY STATE =========================
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================= SOCIAL MEDIA LINKS =========================
    const whatsappLink = document.querySelector('a[href="#"].bx.bxl-whatsapp, aside ul li a i.bxl-whatsapp')?.parentElement;
    if(whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/27781234567?text=Hello%20Nass%20Tech%20Solution%2C%20I%20need%20assistance%20with%20your%20services.', '_blank');
        });
    }

    const facebookLink = document.querySelector('a[href="#"].bx.bxl-facebook-circle, aside ul li a i.bxl-facebook-circle')?.parentElement;
    if(facebookLink) {
        facebookLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.facebook.com/people/Nass-Tech-Solution/61572987654321/', '_blank');
        });
    }

    const instagramLink = document.querySelector('a[href="#"].bx.bxl-instagram, aside ul li a i.bxl-instagram')?.parentElement;
    if(instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.instagram.com/nasstech_solution/', '_blank');
        });
    }

    const tiktokLink = document.querySelector('a[href="#"].bx.bxl-tiktok, aside ul li a i.bxl-tiktok')?.parentElement;
    if(tiktokLink) {
        tiktokLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.tiktok.com/@nasstech.solution', '_blank');
        });
    }

    const youtubeLink = document.querySelector('a[href="#"].bx.bxl-youtube, aside ul li a i.bxl-youtube')?.parentElement;
    if(youtubeLink) {
        youtubeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.youtube.com/@NassTechSolution', '_blank');
        });
    }

    // ========================= NOTIFICATION SYSTEM =========================
    const notificationBtn = document.querySelector('aside ul li a i.bxs-bell-ring')?.parentElement;
    if(notificationBtn) {
        notificationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotificationPanel();
        });
    }

    function showNotificationPanel() {
        const existingPanel = document.getElementById('notificationPanel');
        if(existingPanel) {
            existingPanel.remove();
            return;
        }

        const panel = document.createElement('div');
        panel.id = 'notificationPanel';
        panel.innerHTML = `
            <div class="notification-header">
                <h3><i class='bx bxs-bell-ring'></i> Notifications</h3>
                <button class="close-notif" onclick="this.closest('#notificationPanel').remove()">✕</button>
            </div>
            <div class="notification-list">
                <div class="notification-item new">
                    <i class='bx bx-check-circle' style="color: #00c6ff;"></i>
                    <div class="notif-content">
                        <strong>Welcome to Nass Tech Solution!</strong>
                        <p>We're glad to have you here. Explore our IT services.</p>
                        <small>Just now</small>
                    </div>
                </div>
                <div class="notification-item">
                    <i class='bx bx-calendar' style="color: #ff9800;"></i>
                    <div class="notif-content">
                        <strong>Upcoming Webinar</strong>
                        <p>Cybersecurity Trends 2026 - Register now!</p>
                        <small>2 hours ago</small>
                    </div>
                </div>
                <div class="notification-item">
                    <i class='bx bx-discount' style="color: #4caf50;"></i>
                    <div class="notif-content">
                        <strong>Special Offer!</strong>
                        <p>20% off on all IT support packages this month.</p>
                        <small>Yesterday</small>
                    </div>
                </div>
                <div class="notification-item">
                    <i class='bx bx-news' style="color: #9c27b0;"></i>
                    <div class="notif-content">
                        <strong>New Blog Post</strong>
                        <p>"Top Web Design Trends 2026" - Check it out!</p>
                        <small>2 days ago</small>
                    </div>
                </div>
                <div class="notification-item">
                    <i class='bx bx-check-shield' style="color: #00c6ff;"></i>
                    <div class="notif-content">
                        <strong>System Update Complete</strong>
                        <p>All services are running smoothly.</p>
                        <small>3 days ago</small>
                    </div>
                </div>
            </div>
            <div class="notification-footer">
                <button onclick="markAllRead()">Mark all as read</button>
                <button onclick="this.closest('#notificationPanel').remove()">Close</button>
            </div>
        `;
        
        panel.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            width: 360px;
            max-height: 500px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
            z-index: 10000;
            overflow: hidden;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(panel);
        
        if(!document.getElementById('notificationStyles')) {
            const style = document.createElement('style');
            style.id = 'notificationStyles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .notification-header {
                    background: linear-gradient(135deg, #0a1922, #0e2a38);
                    color: white;
                    padding: 15px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .notification-header h3 {
                    margin: 0;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .close-notif {
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .close-notif:hover {
                    background: rgba(255,255,255,0.3);
                }
                .notification-list {
                    max-height: 380px;
                    overflow-y: auto;
                }
                .notification-item {
                    display: flex;
                    gap: 12px;
                    padding: 15px 20px;
                    border-bottom: 1px solid #eee;
                    transition: background 0.2s;
                }
                .notification-item:hover {
                    background: #f5f7fa;
                }
                .notification-item.new {
                    background: #e8f4fd;
                }
                .notification-item i {
                    font-size: 22px;
                    flex-shrink: 0;
                }
                .notif-content {
                    flex: 1;
                }
                .notif-content strong {
                    display: block;
                    margin-bottom: 5px;
                    color: #1a2a3a;
                }
                .notif-content p {
                    margin: 0;
                    font-size: 13px;
                    color: #666;
                }
                .notif-content small {
                    font-size: 11px;
                    color: #999;
                    display: block;
                    margin-top: 5px;
                }
                .notification-footer {
                    padding: 12px 20px;
                    border-top: 1px solid #eee;
                    display: flex;
                    gap: 10px;
                    justify-content: flex-end;
                }
                .notification-footer button {
                    background: #f0f2f5;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 12px;
                }
                .notification-footer button:hover {
                    background: #e0e4e8;
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            document.addEventListener('click', function closePanel(e) {
                if(!panel.contains(e.target) && e.target !== notificationBtn) {
                    panel.remove();
                    document.removeEventListener('click', closePanel);
                }
            });
        }, 100);
    }

    window.markAllRead = function() {
        const items = document.querySelectorAll('.notification-item');
        items.forEach(item => {
            item.classList.remove('new');
        });
        alert('All notifications marked as read!');
    };

    // ========================= TICKET SYSTEM =========================
    window.showTicketModal = function() {
        const modal = document.createElement('div');
        modal.id = 'ticketModal';
        modal.innerHTML = `
            <div class="ticket-modal-content">
                <div class="ticket-header">
                    <h3><i class='bx bx-ticket'></i> Create New Support Ticket</h3>
                    <button class="close-ticket">✕</button>
                </div>
                <div class="ticket-body">
                    <form id="ticketForm">
                        <div class="form-group">
                            <label>Ticket Priority *</label>
                            <select id="ticketPriority" required>
                                <option value="">Select Priority</option>
                                <option value="low">🟢 Low - General Inquiry</option>
                                <option value="medium">🟡 Medium - Non-urgent Issue</option>
                                <option value="high">🔴 High - Urgent Problem</option>
                                <option value="critical">⚠️ Critical - System Down</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Service Category *</label>
                            <select id="ticketCategory" required>
                                <option value="">Select Category</option>
                                <option value="cybersecurity">Cybersecurity</option>
                                <option value="cloud">Cloud Services</option>
                                <option value="support">IT Support</option>
                                <option value="webdev">Web Development</option>
                                <option value="analytics">Analytics</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Subject *</label>
                            <input type="text" id="ticketSubject" placeholder="Brief description of your issue" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Description *</label>
                            <textarea id="ticketDescription" rows="4" placeholder="Please provide detailed information about your issue..." required></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label>Attachments (Optional)</label>
                            <input type="file" id="ticketAttachment" accept=".jpg,.png,.pdf,.doc,.docx">
                            <small>Max file size: 5MB (Images, PDFs, Documents)</small>
                        </div>
                        
                        <div class="form-group">
                            <label>Preferred Contact Method *</label>
                            <select id="ticketContactMethod" required>
                                <option value="email">Email</option>
                                <option value="phone">Phone Call</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>
                        
                        <div class="ticket-actions">
                            <button type="button" class="cancel-ticket">Cancel</button>
                            <button type="submit" class="submit-ticket">Submit Ticket</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10003;
        `;
        
        document.body.appendChild(modal);
        
        if(!document.getElementById('ticketModalStyles')) {
            const style = document.createElement('style');
            style.id = 'ticketModalStyles';
            style.textContent = `
                .ticket-modal-content {
                    background: white;
                    border-radius: 20px;
                    width: 550px;
                    max-width: 90%;
                    max-height: 85vh;
                    overflow-y: auto;
                    animation: fadeInScale 0.3s ease;
                }
                .ticket-header {
                    background: linear-gradient(135deg, #0a1922, #0e2a38);
                    color: white;
                    padding: 18px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                }
                .ticket-header h3 {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .close-ticket {
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .close-ticket:hover {
                    background: rgba(255,255,255,0.3);
                }
                .ticket-body {
                    padding: 25px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #1a2a3a;
                    font-size: 14px;
                }
                .form-group select,
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 10px 12px;
                    border: 2px solid #e0e6ed;
                    border-radius: 10px;
                    font-size: 14px;
                    transition: all 0.2s;
                    box-sizing: border-box;
                }
                .form-group select:focus,
                .form-group input:focus,
                .form-group textarea:focus {
                    border-color: #0072ff;
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(0,114,255,0.1);
                }
                .form-group textarea {
                    resize: vertical;
                    font-family: inherit;
                }
                .form-group small {
                    display: block;
                    margin-top: 5px;
                    color: #888;
                    font-size: 11px;
                }
                .ticket-actions {
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                    margin-top: 25px;
                    padding-top: 15px;
                    border-top: 1px solid #eee;
                }
                .cancel-ticket {
                    padding: 10px 24px;
                    background: #f0f2f5;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .submit-ticket {
                    padding: 10px 24px;
                    background: linear-gradient(135deg, #00c6ff, #0072ff);
                    color: white;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .cancel-ticket:hover {
                    background: #e0e4e8;
                }
                .submit-ticket:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,114,255,0.3);
                }
            `;
            document.head.appendChild(style);
        }
        
        modal.querySelector('.close-ticket').addEventListener('click', () => modal.remove());
        modal.querySelector('.cancel-ticket').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
        
        const ticketForm = document.getElementById('ticketForm');
        ticketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const ticketData = {
                ticketId: 'TKT-' + Date.now(),
                priority: document.getElementById('ticketPriority').value,
                category: document.getElementById('ticketCategory').value,
                subject: document.getElementById('ticketSubject').value,
                description: document.getElementById('ticketDescription').value,
                contactMethod: document.getElementById('ticketContactMethod').value,
                attachment: document.getElementById('ticketAttachment').files[0]?.name || null,
                status: 'Open',
                createdAt: new Date().toISOString()
            };
            
            let tickets = JSON.parse(localStorage.getItem('support_tickets') || '[]');
            tickets.push(ticketData);
            localStorage.setItem('support_tickets', JSON.stringify(tickets));
            
            const priorityEmoji = {
                low: '🟢',
                medium: '🟡',
                high: '🔴',
                critical: '⚠️'
            };
            
            alert(`✅ Ticket Created Successfully!\n\nTicket ID: ${ticketData.ticketId}\nPriority: ${priorityEmoji[ticketData.priority]} ${ticketData.priority.toUpperCase()}\nSubject: ${ticketData.subject}\n\nOur support team will contact you within 24 hours via ${ticketData.contactMethod}.`);
            
            modal.remove();
            window.updateDashboardActivity(`New ticket #${ticketData.ticketId} created - ${ticketData.subject}`);
        });
    };

    // ========================= INVOICE SYSTEM =========================
    window.showInvoiceModal = function() {
        let demoUsers = JSON.parse(localStorage.getItem('nass_portal_users') || '[]');
        const currentUser = demoUsers[0] || { firstName: 'Guest', lastName: 'User', email: 'guest@nasstech.com', company: 'Individual Client' };
        
        const modal = document.createElement('div');
        modal.id = 'invoiceModal';
        modal.innerHTML = `
            <div class="invoice-modal-content">
                <div class="invoice-header">
                    <h3><i class='bx bx-receipt'></i> Download Invoice</h3>
                    <button class="close-invoice">✕</button>
                </div>
                <div class="invoice-body">
                    <form id="invoiceForm">
                        <div class="form-group">
                            <label>Select Invoice Period *</label>
                            <select id="invoicePeriod" required>
                                <option value="">Select Period</option>
                                <option value="current">Current Month (March 2026)</option>
                                <option value="previous">Previous Month (February 2026)</option>
                                <option value="last3">Last 3 Months</option>
                                <option value="custom">Custom Range</option>
                            </select>
                        </div>
                        
                        <div class="form-group" id="customDateRange" style="display:none;">
                            <label>Select Date Range</label>
                            <div style="display: flex; gap: 10px;">
                                <input type="date" id="startDate" style="flex:1;">
                                <input type="date" id="endDate" style="flex:1;">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Invoice Format *</label>
                            <select id="invoiceFormat" required>
                                <option value="pdf">PDF Document</option>
                                <option value="excel">Excel Spreadsheet</option>
                                <option value="email">Send to Email</option>
                            </select>
                        </div>
                        
                        <div class="invoice-preview" id="invoicePreview">
                            <h4>Invoice Preview</h4>
                            <div class="invoice-card">
                                <div class="invoice-company">
                                    <strong>Nass Tech Solution</strong>
                                    <small>123 Tech Street, Johannesburg, 2000</small>
                                    <small>Tax ID: 9876543210</small>
                                </div>
                                <div class="invoice-client">
                                    <strong>Bill To:</strong>
                                    <p>${currentUser.firstName} ${currentUser.lastName}<br>${currentUser.company}<br>${currentUser.email}</p>
                                </div>
                                <table class="invoice-table">
                                    <thead>
                                        <tr><th>Service</th><th>Amount</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Cybersecurity Pro</td><td>R 2,500</td></tr>
                                        <tr><td>Cloud Backup Plus</td><td>R 1,200</td></tr>
                                        <tr><td>Premium Support</td><td>R 1,800</td></tr>
                                        <tr class="total-row"><td><strong>Total</strong></td><td><strong>R 5,500</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div class="invoice-actions">
                            <button type="button" class="cancel-invoice">Cancel</button>
                            <button type="submit" class="download-invoice"><i class='bx bx-download'></i> Download</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10003;
        `;
        
        document.body.appendChild(modal);
        
        if(!document.getElementById('invoiceModalStyles')) {
            const style = document.createElement('style');
            style.id = 'invoiceModalStyles';
            style.textContent = `
                .invoice-modal-content {
                    background: white;
                    border-radius: 20px;
                    width: 650px;
                    max-width: 90%;
                    max-height: 85vh;
                    overflow-y: auto;
                    animation: fadeInScale 0.3s ease;
                }
                .invoice-header {
                    background: linear-gradient(135deg, #0a1922, #0e2a38);
                    color: white;
                    padding: 18px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                }
                .close-invoice {
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .invoice-body {
                    padding: 25px;
                }
                .invoice-preview {
                    margin-top: 20px;
                    padding: 15px;
                    background: #f8f9fc;
                    border-radius: 12px;
                }
                .invoice-preview h4 {
                    margin: 0 0 15px 0;
                    color: #1a2a3a;
                }
                .invoice-card {
                    font-size: 13px;
                }
                .invoice-company, .invoice-client {
                    margin-bottom: 15px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e0e6ed;
                }
                .invoice-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                .invoice-table th, .invoice-table td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #e0e6ed;
                }
                .total-row td {
                    border-top: 2px solid #1a2a3a;
                    padding-top: 10px;
                }
                .invoice-actions {
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                    margin-top: 20px;
                }
                .cancel-invoice {
                    padding: 10px 24px;
                    background: #f0f2f5;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                }
                .download-invoice {
                    padding: 10px 24px;
                    background: linear-gradient(135deg, #11998e, #38ef7d);
                    color: white;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            `;
            document.head.appendChild(style);
        }
        
        const periodSelect = document.getElementById('invoicePeriod');
        const customRange = document.getElementById('customDateRange');
        
        if(periodSelect) {
            periodSelect.addEventListener('change', function() {
                customRange.style.display = this.value === 'custom' ? 'block' : 'none';
            });
        }
        
        modal.querySelector('.close-invoice').addEventListener('click', () => modal.remove());
        modal.querySelector('.cancel-invoice').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
        
        const invoiceForm = document.getElementById('invoiceForm');
        invoiceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const period = document.getElementById('invoicePeriod').value;
            const format = document.getElementById('invoiceFormat').value;
            
            let periodText = '';
            switch(period) {
                case 'current': periodText = 'March 2026'; break;
                case 'previous': periodText = 'February 2026'; break;
                case 'last3': periodText = 'January - March 2026'; break;
                case 'custom': periodText = `${document.getElementById('startDate').value} to ${document.getElementById('endDate').value}`; break;
            }
            
            if(format === 'email') {
                alert(`📧 Invoice for ${periodText} has been sent to ${currentUser.email}\n\nPlease check your email inbox.`);
            } else {
                alert(`📄 Invoice for ${periodText} is being downloaded as ${format.toUpperCase()}\n\nTotal Amount: R 5,500.00`);
                
                const link = document.createElement('a');
                link.href = 'data:application/octet-stream,' + encodeURIComponent(`INVOICE ${periodText}\nNass Tech Solution\nTotal: R 5,500.00`);
                link.download = `invoice_${periodText.replace(/\s/g, '_')}.${format === 'pdf' ? 'pdf' : 'xlsx'}`;
                link.click();
            }
            
            modal.remove();
            window.updateDashboardActivity(`Invoice downloaded for ${periodText}`);
        });
    };

    // ========================= SCHEDULE CALL SYSTEM =========================
    window.showScheduleModal = function() {
        const modal = document.createElement('div');
        modal.id = 'scheduleModal';
        modal.innerHTML = `
            <div class="schedule-modal-content">
                <div class="schedule-header">
                    <h3><i class='bx bx-calendar'></i> Schedule a Consultation Call</h3>
                    <button class="close-schedule">✕</button>
                </div>
                <div class="schedule-body">
                    <form id="scheduleForm">
                        <div class="form-group">
                            <label>Call Type *</label>
                            <select id="callType" required>
                                <option value="">Select Call Type</option>
                                <option value="technical">🔧 Technical Support</option>
                                <option value="sales">💼 Sales Consultation</option>
                                <option value="project">📋 Project Discussion</option>
                                <option value="billing">💰 Billing Inquiry</option>
                                <option value="general">💬 General Question</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Preferred Date *</label>
                            <input type="date" id="callDate" min="${new Date().toISOString().split('T')[0]}" required>
                        </div>
                        
                        <div class="form-group">
                            <label>Preferred Time *</label>
                            <select id="callTime" required>
                                <option value="">Select Time Slot</option>
                                <option value="09:00">09:00 AM - 09:30 AM</option>
                                <option value="09:30">09:30 AM - 10:00 AM</option>
                                <option value="10:00">10:00 AM - 10:30 AM</option>
                                <option value="10:30">10:30 AM - 11:00 AM</option>
                                <option value="11:00">11:00 AM - 11:30 AM</option>
                                <option value="11:30">11:30 AM - 12:00 PM</option>
                                <option value="14:00">02:00 PM - 02:30 PM</option>
                                <option value="14:30">02:30 PM - 03:00 PM</option>
                                <option value="15:00">03:00 PM - 03:30 PM</option>
                                <option value="15:30">03:30 PM - 04:00 PM</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Call Method *</label>
                            <select id="callMethod" required>
                                <option value="">Select Method</option>
                                <option value="zoom">📹 Zoom Video Call</option>
                                <option value="google">🎥 Google Meet</option>
                                <option value="phone">📞 Phone Call</option>
                                <option value="whatsapp">💬 WhatsApp Voice/Video</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Phone Number (if phone/WhatsApp)</label>
                            <input type="tel" id="callPhone" placeholder="+27 XX XXX XXXX">
                        </div>
                        
                        <div class="form-group">
                            <label>Brief Description *</label>
                            <textarea id="callDescription" rows="3" placeholder="What would you like to discuss?" required></textarea>
                        </div>
                        
                        <div class="timezone-note">
                            <i class='bx bx-time'></i> All times are in SAST (GMT+2)
                        </div>
                        
                        <div class="schedule-actions">
                            <button type="button" class="cancel-schedule">Cancel</button>
                            <button type="submit" class="submit-schedule">Schedule Call</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10003;
        `;
        
        document.body.appendChild(modal);
        
        if(!document.getElementById('scheduleModalStyles')) {
            const style = document.createElement('style');
            style.id = 'scheduleModalStyles';
            style.textContent = `
                .schedule-modal-content {
                    background: white;
                    border-radius: 20px;
                    width: 550px;
                    max-width: 90%;
                    max-height: 85vh;
                    overflow-y: auto;
                    animation: fadeInScale 0.3s ease;
                }
                .schedule-header {
                    background: linear-gradient(135deg, #0a1922, #0e2a38);
                    color: white;
                    padding: 18px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                }
                .close-schedule {
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .schedule-body {
                    padding: 25px;
                }
                .timezone-note {
                    background: #e8f4fd;
                    padding: 8px 12px;
                    border-radius: 8px;
                    font-size: 12px;
                    color: #0072ff;
                    margin: 15px 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .schedule-actions {
                    display: flex;
                    gap: 12px;
                    justify-content: flex-end;
                    margin-top: 20px;
                    padding-top: 15px;
                    border-top: 1px solid #eee;
                }
                .cancel-schedule {
                    padding: 10px 24px;
                    background: #f0f2f5;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                }
                .submit-schedule {
                    padding: 10px 24px;
                    background: linear-gradient(135deg, #f2994a, #f2c94c);
                    color: white;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                    font-weight: 600;
                }
            `;
            document.head.appendChild(style);
        }
        
        modal.querySelector('.close-schedule').addEventListener('click', () => modal.remove());
        modal.querySelector('.cancel-schedule').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
        
        const scheduleForm = document.getElementById('scheduleForm');
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const callData = {
                meetingId: 'MTG-' + Date.now(),
                type: document.getElementById('callType').value,
                date: document.getElementById('callDate').value,
                time: document.getElementById('callTime').value,
                method: document.getElementById('callMethod').value,
                phone: document.getElementById('callPhone').value,
                description: document.getElementById('callDescription').value,
                scheduledAt: new Date().toISOString()
            };
            
            let meetings = JSON.parse(localStorage.getItem('scheduled_meetings') || '[]');
            meetings.push(callData);
            localStorage.setItem('scheduled_meetings', JSON.stringify(meetings));
            
            const formattedDate = new Date(callData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const timeSlot = document.getElementById('callTime').selectedOptions[0].text;
            
            let methodText = '';
            switch(callData.method) {
                case 'zoom': methodText = 'Zoom Video Call'; break;
                case 'google': methodText = 'Google Meet'; break;
                case 'phone': methodText = `Phone Call (${callData.phone || 'Number provided'})`; break;
                case 'whatsapp': methodText = `WhatsApp (${callData.phone || 'Number provided'})`; break;
            }
            
            alert(`✅ Call Scheduled Successfully!\n\nMeeting ID: ${callData.meetingId}\nDate: ${formattedDate}\nTime: ${timeSlot}\nMethod: ${methodText}\n\nA calendar invitation will be sent to your email shortly.\n\nYou can also access the meeting link from your dashboard.`);
            
            modal.remove();
            window.updateDashboardActivity(`Call scheduled for ${formattedDate} at ${timeSlot}`);
        });
    };

    // ========================= UPDATE DASHBOARD ACTIVITY =========================
    window.updateDashboardActivity = function(message) {
        const activityTimeline = document.querySelector('.activity-timeline');
        if(activityTimeline) {
            const newActivity = document.createElement('div');
            newActivity.className = 'activity-item';
            newActivity.innerHTML = `
                <div class="activity-icon blue"><i class='bx bx-check-circle'></i></div>
                <div class="activity-details">
                    <strong>${message}</strong>
                    <small>Just now</small>
                </div>
            `;
            activityTimeline.insertBefore(newActivity, activityTimeline.firstChild);
            
            while(activityTimeline.children.length > 10) {
                activityTimeline.removeChild(activityTimeline.lastChild);
            }
        }
    };

    // ========================= PROFESSIONAL DASHBOARD WITH GRAPHS =========================
    const dashboardLink = document.querySelector('aside ul li a i.bxs-dashboard')?.parentElement;
    if(dashboardLink) {
        dashboardLink.addEventListener('click', function(e) {
            e.preventDefault();
            showProfessionalDashboard();
        });
    }

    const homeLink = document.querySelector('aside ul li a i.bx-home')?.parentElement;
    if(homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            showProfessionalDashboard();
        });
    }

    function showProfessionalDashboard() {
        const existing = document.getElementById('customerDashboard');
        if(existing) {
            existing.remove();
            return;
        }

        const dashboard = document.createElement('div');
        dashboard.id = 'customerDashboard';
        dashboard.innerHTML = `
            <div class="dashboard-container">
                <div class="dash-header">
                    <div class="dash-title">
                        <h2><i class='bx bxs-dashboard'></i> Analytics Dashboard</h2>
                        <p>Real-time insights & performance metrics</p>
                    </div>
                    <button class="close-dash" onclick="document.getElementById('customerDashboard').remove()">
                        <i class='bx bx-x'></i>
                    </button>
                </div>
                
                <div class="dash-stats-grid">
                    <div class="stat-card-modern">
                        <div class="stat-icon blue">
                            <i class='bx bx-trending-up'></i>
                        </div>
                        <div class="stat-details">
                            <span class="stat-label">Total Revenue</span>
                            <h3 class="stat-value">R 124,500</h3>
                            <span class="stat-change positive"><i class='bx bx-up-arrow-alt'></i> +12.5%</span>
                        </div>
                    </div>
                    <div class="stat-card-modern">
                        <div class="stat-icon green">
                            <i class='bx bx-user-check'></i>
                        </div>
                        <div class="stat-details">
                            <span class="stat-label">Active Clients</span>
                            <h3 class="stat-value">247</h3>
                            <span class="stat-change positive"><i class='bx bx-up-arrow-alt'></i> +8.2%</span>
                        </div>
                    </div>
                    <div class="stat-card-modern">
                        <div class="stat-icon orange">
                            <i class='bx bx-support'></i>
                        </div>
                        <div class="stat-details">
                            <span class="stat-label">Support Tickets</span>
                            <h3 class="stat-value">18</h3>
                            <span class="stat-change negative"><i class='bx bx-down-arrow-alt'></i> -3</span>
                        </div>
                    </div>
                    <div class="stat-card-modern">
                        <div class="stat-icon purple">
                            <i class='bx bx-star'></i>
                        </div>
                        <div class="stat-details">
                            <span class="stat-label">CSAT Score</span>
                            <h3 class="stat-value">4.8</h3>
                            <span class="stat-change positive"><i class='bx bx-up-arrow-alt'></i> +0.3</span>
                        </div>
                    </div>
                </div>

                <div class="charts-row">
                    <div class="chart-card">
                        <div class="chart-header">
                            <h3><i class='bx bx-line-chart'></i> Revenue Trend 2026</h3>
                            <select id="revenuePeriod" onchange="updateRevenueChart()">
                                <option value="weekly">Weekly</option>
                                <option value="monthly" selected>Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                        <canvas id="revenueChart" width="400" height="250"></canvas>
                    </div>
                    <div class="chart-card">
                        <div class="chart-header">
                            <h3><i class='bx bx-pie-chart-alt-2'></i> Service Distribution</h3>
                        </div>
                        <canvas id="servicesChart" width="400" height="250"></canvas>
                    </div>
                </div>

                <div class="charts-row">
                    <div class="chart-card">
                        <div class="chart-header">
                            <h3><i class='bx bx-bar-chart-alt-2'></i> Monthly Ticket Resolution</h3>
                        </div>
                        <canvas id="ticketsChart" width="400" height="250"></canvas>
                    </div>
                    <div class="chart-card">
                        <div class="chart-header">
                            <h3><i class='bx bx-doughnut-chart'></i> System Uptime</h3>
                        </div>
                        <canvas id="uptimeChart" width="400" height="250"></canvas>
                    </div>
                </div>

                <div class="recent-activity">
                    <div class="activity-header">
                        <h3><i class='bx bx-time-five'></i> Recent Activity</h3>
                        <a href="#" onclick="return false">View All</a>
                    </div>
                    <div class="activity-timeline">
                        <div class="activity-item">
                            <div class="activity-icon green"><i class='bx bx-check-circle'></i></div>
                            <div class="activity-details">
                                <strong>Ticket #NTS-1001 resolved</strong>
                                <p>Website speed optimization completed successfully</p>
                                <small>2 hours ago</small>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon blue"><i class='bx bx-cloud-upload'></i></div>
                            <div class="activity-details">
                                <strong>Cloud backup completed</strong>
                                <p>15.2 GB of data backed up to secure servers</p>
                                <small>5 hours ago</small>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon orange"><i class='bx bx-shield-alt'></i></div>
                            <div class="activity-details">
                                <strong>Security scan finished</strong>
                                <p>No threats detected on your infrastructure</p>
                                <small>Yesterday</small>
                            </div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-icon purple"><i class='bx bx-envelope'></i></div>
                            <div class="activity-details">
                                <strong>Monthly report generated</strong>
                                <p>Your January analytics report is ready to download</p>
                                <small>Yesterday</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="active-services-section">
                    <h3><i class='bx bx-server'></i> Your Active Subscriptions</h3>
                    <div class="services-modern">
                        <div class="service-card-modern">
                            <i class='bx bx-shield-alt'></i>
                            <div>
                                <strong>Cybersecurity Pro</strong>
                                <p>Expires: Dec 31, 2026</p>
                            </div>
                            <span class="badge active">Active</span>
                        </div>
                        <div class="service-card-modern">
                            <i class='bx bx-cloud'></i>
                            <div>
                                <strong>Cloud Backup Plus</strong>
                                <p>78GB / 200GB used</p>
                            </div>
                            <span class="badge active">Active</span>
                        </div>
                        <div class="service-card-modern">
                            <i class='bx bx-headphone'></i>
                            <div>
                                <strong>Premium 24/7 Support</strong>
                                <p>Priority SLA included</p>
                            </div>
                            <span class="badge active">Active</span>
                        </div>
                        <div class="service-card-modern">
                            <i class='bx bx-line-chart'></i>
                            <div>
                                <strong>Analytics Dashboard</strong>
                                <p>Real-time monitoring</p>
                            </div>
                            <span class="badge active">Active</span>
                        </div>
                    </div>
                </div>

                <div class="quick-actions">
                    <button class="action-btn" id="newTicketBtn">
                        <i class='bx bx-ticket'></i> New Ticket
                    </button>
                    <button class="action-btn" id="downloadInvoiceBtn">
                        <i class='bx bx-receipt'></i> Download Invoice
                    </button>
                    <button class="action-btn" id="scheduleCallBtn">
                        <i class='bx bx-calendar'></i> Schedule Call
                    </button>
                </div>
            </div>
        `;
        
        if(!document.getElementById('dashboardStyles')) {
            const dashStyle = document.createElement('style');
            dashStyle.id = 'dashboardStyles';
            dashStyle.textContent = `
                @keyframes fadeInScale {
                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
                    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
                #customerDashboard {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 95%;
                    max-width: 1300px;
                    max-height: 90vh;
                    background: #f0f2f8;
                    border-radius: 28px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                    z-index: 10001;
                    overflow-y: auto;
                    animation: fadeInScale 0.3s ease;
                }
                .dashboard-container { padding: 25px 30px; }
                .dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; }
                .dash-title h2 { margin: 0; font-size: 28px; color: #1a2a3a; display: flex; align-items: center; gap: 10px; }
                .dash-title p { margin: 5px 0 0; color: #6c757d; font-size: 14px; }
                .close-dash { background: rgba(0,0,0,0.1); border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 24px; }
                .close-dash:hover { background: rgba(0,0,0,0.2); }
                .dash-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-bottom: 30px; }
                .stat-card-modern { background: white; padding: 20px; border-radius: 20px; display: flex; align-items: center; gap: 18px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
                .stat-card-modern:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
                .stat-icon { width: 55px; height: 55px; border-radius: 18px; display: flex; align-items: center; justify-content: center; }
                .stat-icon i { font-size: 28px; color: white; }
                .stat-icon.blue { background: linear-gradient(135deg, #00c6ff, #0072ff); }
                .stat-icon.green { background: linear-gradient(135deg, #11998e, #38ef7d); }
                .stat-icon.orange { background: linear-gradient(135deg, #f2994a, #f2c94c); }
                .stat-icon.purple { background: linear-gradient(135deg, #667eea, #764ba2); }
                .stat-label { font-size: 13px; color: #6c757d; text-transform: uppercase; }
                .stat-value { font-size: 28px; font-weight: 700; margin: 5px 0; color: #1a2a3a; }
                .stat-change { font-size: 12px; display: inline-flex; align-items: center; gap: 3px; }
                .stat-change.positive { color: #11998e; }
                .stat-change.negative { color: #e74c3c; }
                .charts-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 25px; margin-bottom: 30px; }
                .chart-card { background: white; border-radius: 20px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
                .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; }
                .chart-header h3 { margin: 0; font-size: 18px; display: flex; align-items: center; gap: 8px; }
                .chart-header select { padding: 6px 12px; border-radius: 10px; border: 1px solid #ddd; }
                canvas { max-width: 100%; height: auto; }
                .recent-activity, .active-services-section { background: white; border-radius: 20px; padding: 20px; margin-bottom: 30px; }
                .activity-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
                .activity-header h3 { margin: 0; font-size: 18px; display: flex; align-items: center; gap: 8px; }
                .activity-timeline { display: flex; flex-direction: column; gap: 18px; }
                .activity-item { display: flex; gap: 15px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
                .activity-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
                .activity-icon i { font-size: 20px; color: white; }
                .activity-icon.green { background: #11998e; }
                .activity-icon.blue { background: #0072ff; }
                .activity-icon.orange { background: #f2994a; }
                .activity-icon.purple { background: #764ba2; }
                .services-modern { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; }
                .service-card-modern { display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fc; border-radius: 15px; }
                .service-card-modern i { font-size: 32px; color: #0072ff; }
                .badge { padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; }
                .badge.active { background: #e8f5e9; color: #2e7d32; }
                .quick-actions { display: flex; gap: 15px; justify-content: flex-end; flex-wrap: wrap; }
                .action-btn { padding: 12px 24px; background: white; border: 1px solid #e0e6ed; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; }
                .action-btn:hover { background: #f0f2f8; border-color: #0072ff; transform: translateY(-2px); }
                @media (max-width: 900px) { .charts-row { grid-template-columns: 1fr; } .dashboard-container { padding: 15px; } .dash-stats-grid { grid-template-columns: 1fr; } }
            `;
            document.head.appendChild(dashStyle);
        }
        
        document.body.appendChild(dashboard);
        
        dashboard.addEventListener('click', function(e) {
            if(e.target === dashboard) {
                dashboard.remove();
            }
        });
        
        if(typeof Chart === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
            script.onload = () => {
                setTimeout(() => initAllCharts(), 100);
            };
            document.head.appendChild(script);
        } else {
            initAllCharts();
        }
        
        function initAllCharts() {
            const revenueCtx = document.getElementById('revenueChart')?.getContext('2d');
            if(revenueCtx) {
                window.revenueChart = new Chart(revenueCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [{
                            label: 'Revenue (R)',
                            data: [85000, 92000, 101000, 98000, 112000, 118000, 124500, 131000, 128000, 142000, 151000, 162000],
                            borderColor: '#0072ff',
                            backgroundColor: 'rgba(0, 114, 255, 0.05)',
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: { responsive: true, maintainAspectRatio: true }
                });
            }
            
            const servicesCtx = document.getElementById('servicesChart')?.getContext('2d');
            if(servicesCtx) {
                new Chart(servicesCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Cybersecurity', 'Cloud Services', 'IT Support', 'Web Development', 'Analytics'],
                        datasets: [{ data: [35, 28, 22, 10, 5], backgroundColor: ['#0072ff', '#00c6ff', '#11998e', '#f2994a', '#764ba2'], borderWidth: 0 }]
                    },
                    options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'bottom' } } }
                });
            }
            
            const ticketsCtx = document.getElementById('ticketsChart')?.getContext('2d');
            if(ticketsCtx) {
                new Chart(ticketsCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                        datasets: [{ label: 'Resolved', data: [12, 15, 18, 22], backgroundColor: '#11998e', borderRadius: 8 }, { label: 'Open', data: [8, 6, 4, 3], backgroundColor: '#f2994a', borderRadius: 8 }]
                    },
                    options: { responsive: true, maintainAspectRatio: true }
                });
            }
            
            const uptimeCtx = document.getElementById('uptimeChart')?.getContext('2d');
            if(uptimeCtx) {
                new Chart(uptimeCtx, {
                    type: 'doughnut',
                    data: { labels: ['Uptime (99.9%)', 'Downtime (0.1%)'], datasets: [{ data: [99.9, 0.1], backgroundColor: ['#11998e', '#e74c3c'], borderWidth: 0 }] },
                    options: { responsive: true, maintainAspectRatio: true, cutout: '65%' }
                });
            }
        }
        
        window.updateRevenueChart = function() {
            const period = document.getElementById('revenuePeriod')?.value;
            if(window.revenueChart) {
                let newData, newLabels;
                if(period === 'weekly') {
                    newLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                    newData = [18500, 21200, 19800, 22500, 24800, 16200, 14500];
                } else if(period === 'yearly') {
                    newLabels = ['2022', '2023', '2024', '2025', '2026'];
                    newData = [520000, 680000, 890000, 1150000, 1620000];
                } else {
                    newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    newData = [85000, 92000, 101000, 98000, 112000, 118000, 124500, 131000, 128000, 142000, 151000, 162000];
                }
                window.revenueChart.data.labels = newLabels;
                window.revenueChart.data.datasets[0].data = newData;
                window.revenueChart.update();
            }
        };
        
        setTimeout(() => {
            document.getElementById('newTicketBtn')?.addEventListener('click', window.showTicketModal);
            document.getElementById('downloadInvoiceBtn')?.addEventListener('click', window.showInvoiceModal);
            document.getElementById('scheduleCallBtn')?.addEventListener('click', window.showScheduleModal);
        }, 100);
    }

    // ========================= SIGN IN / SIGN OUT =========================
    const signInBtn = document.querySelector('.nav-buttons .btn:first-child');
    const signOutBtn = document.querySelector('.nav-buttons .btn.logout');
    
    if(signInBtn) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showLoginModal();
        });
    }
    
    if(signOutBtn) {
        signOutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if(confirm('Are you sure you want to sign out?')) {
                const dashboard = document.getElementById('customerDashboard');
                if(dashboard) dashboard.remove();
                alert('You have been signed out successfully.');
                const portalEmail = document.getElementById('portalEmail');
                const portalPassword = document.getElementById('portalPassword');
                if(portalEmail) portalEmail.value = '';
                if(portalPassword) portalPassword.value = '';
            }
        });
    }
    
    function showLoginModal() {
        const modal = document.createElement('div');
        modal.id = 'loginModal';
        modal.innerHTML = `
            <div class="login-modal-content">
                <div class="login-header">
                    <h3><i class='bx bx-log-in'></i> Sign In</h3>
                    <button class="close-login">✕</button>
                </div>
                <div class="login-body">
                    <input type="email" id="loginEmail" placeholder="Email address" autocomplete="email">
                    <input type="password" id="loginPassword" placeholder="Password" autocomplete="current-password">
                    <button id="doLoginBtn" class="btn-login">Sign In</button>
                    <p class="demo-note">Demo: demo@nasstech.com / demo123</p>
                </div>
            </div>
        `;
        
        modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10002;`;
        
        const modalContent = modal.querySelector('.login-modal-content');
        modalContent.style.cssText = `background: white; border-radius: 20px; width: 380px; max-width: 90%; overflow: hidden; animation: fadeInScale 0.2s ease;`;
        
        const loginHeader = modal.querySelector('.login-header');
        loginHeader.style.cssText = `background: linear-gradient(135deg, #0a1922, #0e2a38); color: white; padding: 18px 20px; display: flex; justify-content: space-between; align-items: center;`;
        
        const loginBody = modal.querySelector('.login-body');
        loginBody.style.cssText = `padding: 25px;`;
        
        const inputs = modal.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.cssText = `width: 100%; padding: 12px 15px; margin-bottom: 15px; border: 2px solid #e0e6ed; border-radius: 12px; font-size: 14px; box-sizing: border-box;`;
        });
        
        const loginBtn = modal.querySelector('#doLoginBtn');
        loginBtn.style.cssText = `width: 100%; padding: 12px; background: linear-gradient(135deg, #00c6ff, #0072ff); color: white; border: none; border-radius: 30px; font-weight: 600; cursor: pointer;`;
        
        const demoNote = modal.querySelector('.demo-note');
        demoNote.style.cssText = `text-align: center; margin-top: 15px; font-size: 12px; color: #888;`;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close-login').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
        
        document.getElementById('doLoginBtn').addEventListener('click', () => {
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            
            if(!email || !password) {
                alert('Please enter both email and password.');
                return;
            }
            
            let demoUsers = JSON.parse(localStorage.getItem('nass_portal_users') || '[]');
            const matchedUser = demoUsers.find(u => u.email === email && u.password === password);
            const isDemoAccount = (email === "demo@nasstech.com" && password === "demo123");
            
            if(matchedUser || isDemoAccount) {
                alert(`Welcome back ${matchedUser ? matchedUser.firstName : 'Guest'}!`);
                modal.remove();
                showProfessionalDashboard();
            } else {
                alert('Invalid email or password.\n\nDemo account:\ndemo@nasstech.com / demo123');
            }
        });
    }

    // ========================= PORTAL LOGIN FORM HANDLER =========================
    const portalForm = document.getElementById('portalLoginForm');
    if(portalForm) {
        portalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('portalEmail').value.trim();
            const password = document.getElementById('portalPassword').value.trim();
            
            if(email === "") {
                alert("Please enter your email address.");
                return;
            }
            
            if(password === "") {
                alert("Please enter your password.");
                return;
            }
            
            let demoUsers = JSON.parse(localStorage.getItem('nass_portal_users') || '[]');
            const matchedUser = demoUsers.find(u => u.email === email && u.password === password);
            const isDemoAccount = (email === "demo@nasstech.com" && password === "demo123");
            
            if(matchedUser || isDemoAccount) {
                const portalResponseDiv = document.getElementById('portalResponse');
                if(portalResponseDiv) {
                    portalResponseDiv.style.display = 'block';
                    portalResponseDiv.innerHTML = `<i class='bx bx-check-circle'></i> ✅ Welcome back ${matchedUser ? matchedUser.firstName : 'Client'}! Loading dashboard...`;
                    portalResponseDiv.style.color = '#155724';
                    portalResponseDiv.style.background = '#d4edda';
                    portalResponseDiv.style.border = '1px solid #c3e6cb';
                }
                
                const registrationModal = document.getElementById('registrationModal');
                const forgotModal = document.getElementById('forgotPasswordModal');
                if(registrationModal) registrationModal.style.display = 'none';
                if(forgotModal) forgotModal.style.display = 'none';
                
                setTimeout(() => {
                    showProfessionalDashboard();
                    if(portalResponseDiv) {
                        setTimeout(() => {
                            portalResponseDiv.style.display = 'none';
                        }, 1000);
                    }
                    document.getElementById('portalEmail').value = '';
                    document.getElementById('portalPassword').value = '';
                }, 1500);
                
            } else {
                const portalResponseDiv = document.getElementById('portalResponse');
                if(portalResponseDiv) {
                    portalResponseDiv.style.display = 'block';
                    portalResponseDiv.innerHTML = `<i class='bx bx-error-circle'></i> ❌ Invalid email or password.<br><small>Demo: demo@nasstech.com / demo123<br>Or register a new account.</small>`;
                    portalResponseDiv.style.color = '#721c24';
                    portalResponseDiv.style.background = '#f8d7da';
                    portalResponseDiv.style.border = '1px solid #f5c6cb';
                    
                    setTimeout(() => {
                        portalResponseDiv.style.display = 'none';
                    }, 4000);
                }
            }
        });
    }
});

// ==================== REGISTRATION MODAL FUNCTIONS ====================
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('registrationModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const regForm = document.getElementById('registrationForm');
    const regFormMessage = document.getElementById('regFormMessage');
    
    if (!modal) return;
    
    const regFirstName = document.getElementById('regFirstName');
    const regLastName = document.getElementById('regLastName');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');
    const regConfirmPassword = document.getElementById('regConfirmPassword');
    const regCompany = document.getElementById('regCompany');
    const regPhone = document.getElementById('regPhone');
    const regTerms = document.getElementById('regTerms');
    
    function showRegMessage(msg, isError = true) {
        regFormMessage.innerHTML = `<span style="color: ${isError ? '#e74c3c' : '#27ae60'}; background: ${isError ? '#fee' : '#e8f8f0'}; padding: 10px; border-radius: 12px; display: inline-block; width: 100%;">${msg}</span>`;
        setTimeout(() => { if (regFormMessage.innerHTML.includes(msg)) regFormMessage.innerHTML = ''; }, 4000);
    }
    
    function validatePasswordStrength(password) {
        if (password.length < 12) return { valid: false, message: '❌ Password must be at least 12 characters long' };
        if (!/[A-Z]/.test(password)) return { valid: false, message: '❌ Password must contain at least one uppercase letter (A-Z)' };
        if (!/[a-z]/.test(password)) return { valid: false, message: '❌ Password must contain at least one lowercase letter (a-z)' };
        if (!/[0-9]/.test(password)) return { valid: false, message: '❌ Password must contain at least one number (0-9)' };
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return { valid: false, message: '❌ Password must contain at least one special character (!@#$%^&* etc.)' };
        return { valid: true, message: '✅ Strong password!' };
    }
    
    window.openRegistrationModal = function() {
        modal.style.display = 'flex';
        if (regForm) regForm.reset();
        if (regFormMessage) regFormMessage.innerHTML = '';
    }
    
    function closeModal() { modal.style.display = 'none'; }
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
    
    if (regPassword) {
        regPassword.addEventListener('input', function() {
            const password = this.value;
            if (password.length > 0) {
                const strength = validatePasswordStrength(password);
                if (!strength.valid) {
                    regPassword.style.borderColor = '#ff6b6b';
                    regPassword.style.boxShadow = '0 0 0 3px rgba(255,107,107,0.1)';
                } else {
                    regPassword.style.borderColor = '#51cf66';
                    regPassword.style.boxShadow = '0 0 0 3px rgba(81,207,102,0.1)';
                }
            } else {
                regPassword.style.borderColor = '#ddd';
                regPassword.style.boxShadow = 'none';
            }
        });
    }
    
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = regFirstName.value.trim();
            const lastName = regLastName.value.trim();
            const email = regEmail.value.trim();
            const password = regPassword.value;
            const confirm = regConfirmPassword.value;
            const termsAccepted = regTerms.checked;
            
            if (!firstName || !lastName || !email || !password || !confirm) {
                showRegMessage('❌ Please fill all required fields (*).');
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                showRegMessage('⚠️ Please enter a valid email address (e.g., name@domain.com).');
                return;
            }
            const passwordValidation = validatePasswordStrength(password);
            if (!passwordValidation.valid) {
                showRegMessage(passwordValidation.message);
                return;
            }
            if (password !== confirm) {
                showRegMessage('❗ Passwords do not match. Please re-enter.');
                return;
            }
            if (!termsAccepted) {
                showRegMessage('📜 You must agree to the Terms of Service and Privacy Policy.');
                return;
            }
            
            const newUser = {
                firstName: firstName, lastName: lastName, email: email,
                company: regCompany.value.trim() || "Individual Client",
                phone: regPhone.value.trim() || "Not provided",
                password: password, registeredAt: new Date().toISOString()
            };
            
            let demoUsers = JSON.parse(localStorage.getItem('nass_portal_users') || '[]');
            if (demoUsers.some(u => u.email === email)) {
                showRegMessage('⚠️ An account with this email already exists. Please login instead.');
                return;
            }
            
            demoUsers.push(newUser);
            localStorage.setItem('nass_portal_users', JSON.stringify(demoUsers));
            showRegMessage(`🎉 Welcome ${firstName}! Registration successful! You can now login.`, false);
            
            setTimeout(() => {
                closeModal();
                const loginEmailField = document.getElementById('portalEmail');
                if (loginEmailField) loginEmailField.value = email;
                const portalResponse = document.getElementById('portalResponse');
                if (portalResponse) {
                    portalResponse.style.display = 'block';
                    portalResponse.innerHTML = `<i class='bx bx-check-circle'></i> ✅ Account created successfully! Please login with your new credentials.`;
                    portalResponse.style.color = '#155724';
                    portalResponse.style.background = '#d4edda';
                    setTimeout(() => { portalResponse.style.display = 'none'; }, 4000);
                }
            }, 2000);
        });
    }
    
    const switchToLoginLink = document.getElementById('switchToLoginLink');
    if (switchToLoginLink) {
        switchToLoginLink.addEventListener('click', function(e) { e.preventDefault(); closeModal(); });
    }
    
    const registerNewClientLink = document.getElementById('registerNewClientLink');
    if (registerNewClientLink) {
        registerNewClientLink.addEventListener('click', function(e) { e.preventDefault(); window.openRegistrationModal(); });
    }
});

// ==================== FORGOT PASSWORD MODAL FUNCTIONS ====================
document.addEventListener('DOMContentLoaded', function() {
    const forgotModal = document.getElementById('forgotPasswordModal');
    const closeForgotModalBtn = document.getElementById('closeForgotModalBtn');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotForm = document.getElementById('forgotPasswordForm');
    const verificationSection = document.getElementById('verificationSection');
    const resetPasswordSection = document.getElementById('resetPasswordSection');
    const verifyCodeForm = document.getElementById('verifyCodeForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const forgotFormMessage = document.getElementById('forgotFormMessage');
    const backToLoginLink = document.getElementById('backToLoginLink');
    const resendCodeLink = document.getElementById('resendCodeLink');
    
    let tempResetEmail = '';
    let tempVerificationCode = '';
    
    if (!forgotModal) return;
    
    function showForgotMessage(msg, isError = true) {
        forgotFormMessage.innerHTML = `<span style="color: ${isError ? '#e74c3c' : '#27ae60'}; background: ${isError ? '#fee' : '#e8f8f0'}; padding: 10px; border-radius: 12px; display: inline-block; width: 100%;">${msg}</span>`;
        setTimeout(() => { if (forgotFormMessage.innerHTML.includes(msg)) forgotFormMessage.innerHTML = ''; }, 4000);
    }
    
    function validateNewPassword(password) {
        if (password.length < 12) return { valid: false, message: '❌ Password must be at least 12 characters long' };
        if (!/[A-Z]/.test(password)) return { valid: false, message: '❌ Password must contain at least one uppercase letter (A-Z)' };
        if (!/[a-z]/.test(password)) return { valid: false, message: '❌ Password must contain at least one lowercase letter (a-z)' };
        if (!/[0-9]/.test(password)) return { valid: false, message: '❌ Password must contain at least one number (0-9)' };
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return { valid: false, message: '❌ Password must contain at least one special character (!@#$%^&* etc.)' };
        return { valid: true, message: '✅ Strong password!' };
    }
    
    function openForgotModal() {
        forgotModal.style.display = 'flex';
        forgotForm.style.display = 'block';
        verificationSection.style.display = 'none';
        resetPasswordSection.style.display = 'none';
        document.getElementById('resetEmail').value = '';
        document.getElementById('verificationCode').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmNewPassword').value = '';
        forgotFormMessage.innerHTML = '';
        tempResetEmail = '';
        tempVerificationCode = '';
    }
    
    function closeForgotModal() { forgotModal.style.display = 'none'; }
    
    if (closeForgotModalBtn) closeForgotModalBtn.addEventListener('click', closeForgotModal);
    if (forgotPasswordLink) forgotPasswordLink.addEventListener('click', function(e) { e.preventDefault(); openForgotModal(); });
    if (backToLoginLink) backToLoginLink.addEventListener('click', function(e) { e.preventDefault(); closeForgotModal(); });
    window.addEventListener('click', function(e) { if (e.target === forgotModal) closeForgotModal(); });
    
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('resetEmail').value.trim();
            if (!email) { showForgotMessage('❌ Please enter your email address.'); return; }
            
            let demoUsers = JSON.parse(localStorage.getItem('nass_portal_users') || '[]');
            if (!demoUsers.some(u => u.email === email)) {
                showForgotMessage('❌ No account found with this email address. Please register first.');
                return;
            }
            
            tempVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();
            tempResetEmail = email;
            sessionStorage.setItem('resetCode_' + email, tempVerificationCode);
            sessionStorage.setItem('resetExpiry_' + email, Date.now() + 300000);
            alert(`📧 DEMO MODE: Your verification code is: ${tempVerificationCode}\n\n(This would be sent to ${email} in production)`);
            showForgotMessage(`✅ Verification code sent to ${email}. Please check your email.`, false);
            forgotForm.style.display = 'none';
            verificationSection.style.display = 'block';
            forgotFormMessage.innerHTML = '';
        });
    }
    
    if (verifyCodeForm) {
        verifyCodeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const enteredCode = document.getElementById('verificationCode').value.trim();
            if (!enteredCode) { showForgotMessage('❌ Please enter the verification code.'); return; }
            
            const storedCode = sessionStorage.getItem('resetCode_' + tempResetEmail);
            const expiryTime = sessionStorage.getItem('resetExpiry_' + tempResetEmail);
            if (!storedCode || !expiryTime) { showForgotMessage('❌ No verification code found. Please request a new code.'); return; }
            if (Date.now() > parseInt(expiryTime)) { showForgotMessage('❌ Verification code has expired. Please request a new code.'); return; }
            if (enteredCode !== storedCode) { showForgotMessage('❌ Invalid verification code. Please try again.'); return; }
            
            showForgotMessage('✅ Code verified! Please enter your new password.', false);
            verificationSection.style.display = 'none';
            resetPasswordSection.style.display = 'block';
            forgotFormMessage.innerHTML = '';
        });
    }
    
    if (resendCodeLink) {
        resendCodeLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (!tempResetEmail) { showForgotMessage('❌ Session expired. Please restart the process.'); return; }
            tempVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();
            sessionStorage.setItem('resetCode_' + tempResetEmail, tempVerificationCode);
            sessionStorage.setItem('resetExpiry_' + tempResetEmail, Date.now() + 300000);
            alert(`📧 DEMO MODE: Your new verification code is: ${tempVerificationCode}\n\n(This would be sent to ${tempResetEmail} in production)`);
            showForgotMessage(`✅ New verification code sent to ${tempResetEmail}`, false);
            document.getElementById('verificationCode').value = '';
        });
    }
    
    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmNewPassword').value;
            if (!newPassword || !confirmPassword) { showForgotMessage('❌ Please enter and confirm your new password.'); return; }
            
            const passwordValidation = validateNewPassword(newPassword);
            if (!passwordValidation.valid) { showForgotMessage(passwordValidation.message); return; }
            if (newPassword !== confirmPassword) { showForgotMessage('❌ Passwords do not match.'); return; }
            
            let demoUsers = JSON.parse(localStorage.getItem('nass_portal_users') || '[]');
            const userIndex = demoUsers.findIndex(u => u.email === tempResetEmail);
            if (userIndex !== -1) {
                demoUsers[userIndex].password = newPassword;
                localStorage.setItem('nass_portal_users', JSON.stringify(demoUsers));
                sessionStorage.removeItem('resetCode_' + tempResetEmail);
                sessionStorage.removeItem('resetExpiry_' + tempResetEmail);
                showForgotMessage('✅ Password reset successful! You can now login with your new password.', false);
                
                setTimeout(() => {
                    closeForgotModal();
                    const loginEmailField = document.getElementById('portalEmail');
                    if (loginEmailField) loginEmailField.value = tempResetEmail;
                    const portalResponse = document.getElementById('portalResponse');
                    if (portalResponse) {
                        portalResponse.style.display = 'block';
                        portalResponse.innerHTML = `<i class='bx bx-check-circle'></i> ✅ Password reset successful! Please login with your new password.`;
                        portalResponse.style.color = '#155724';
                        portalResponse.style.background = '#d4edda';
                        setTimeout(() => { portalResponse.style.display = 'none'; }, 4000);
                    }
                }, 2000);
            }
        });
    }
});

// ==================== JOB APPLICATION MODAL FUNCTIONS ====================
document.addEventListener('DOMContentLoaded', function() {
    const jobModal = document.getElementById('jobApplicationModal');
    const closeJobModalBtn = document.getElementById('closeJobModalBtn');
    const jobForm = document.getElementById('jobApplicationForm');
    const jobFormMessage = document.getElementById('jobFormMessage');
    
    if (!jobModal) return;
    
    const applyButtons = document.querySelectorAll('.card .btn');
    
    function showSuccessMessage(firstName, position) {
        // Create success message overlay
        const successOverlay = document.createElement('div');
        successOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;
        
        successOverlay.innerHTML = `
            <div style="background: white; max-width: 400px; width: 90%; padding: 40px; border-radius: 20px; text-align: center; animation: fadeIn 0.4s ease;">
                <div style="font-size: 70px; color: #4caf50; margin-bottom: 20px;">
                    <i class='bx bx-check-circle'></i>
                </div>
                <h2 style="color: #002a3a; margin-bottom: 15px;">Thank You, ${firstName}!</h2>
                <p style="color: #555; font-size: 16px; margin-bottom: 20px;">Your application for <strong>${position}</strong> has been submitted successfully!</p>
                <p style="color: #777; font-size: 14px; margin-bottom: 25px;">We'll review your application and contact you within 5-7 business days.</p>
                <button id="closeSuccessBtn" style="background: linear-gradient(135deg, #00c6ff, #0072ff); color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-size: 16px; font-weight: 600;">Close</button>
            </div>
        `;
        
        document.body.appendChild(successOverlay);
        
        document.getElementById('closeSuccessBtn').addEventListener('click', function() {
            successOverlay.remove();
        });
        
        // Auto close after 5 seconds
        setTimeout(function() {
            if (successOverlay) successOverlay.remove();
        }, 5000);
    }
    
    function showJobMessage(msg, isError = true) {
        jobFormMessage.innerHTML = `<span style="color: ${isError ? '#e74c3c' : '#27ae60'}; background: ${isError ? '#fee' : '#e8f8f0'}; padding: 10px; border-radius: 12px; display: inline-block; width: 100%;">${msg}</span>`;
        setTimeout(() => {
            if (jobFormMessage.innerHTML.includes(msg)) {
                jobFormMessage.innerHTML = '';
            }
        }, 4000);
    }
    
    function openJobModal(jobTitle) {
        jobModal.style.display = 'flex';
        jobForm.reset();
        jobFormMessage.innerHTML = '';
        
        const positionSelect = document.getElementById('jobPosition');
        if (positionSelect && jobTitle) {
            for(let i = 0; i < positionSelect.options.length; i++) {
                if(positionSelect.options[i].text.includes(jobTitle.replace(/[🔒☁️📊💻]/g, '').trim())) {
                    positionSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }
    
    function closeJobModal() {
        jobModal.style.display = 'none';
    }
    
    if (closeJobModalBtn) {
        closeJobModalBtn.addEventListener('click', closeJobModal);
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === jobModal) {
            closeJobModal();
        }
    });
    
    if (applyButtons.length > 0) {
        applyButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.card');
                const jobTitleElement = card.querySelector('h3');
                let selectedJobTitle = '';
                if (jobTitleElement) {
                    selectedJobTitle = jobTitleElement.textContent.trim();
                }
                openJobModal(selectedJobTitle);
            });
        });
    }
    
    if (jobForm) {
        jobForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('jobFirstName').value.trim();
            const lastName = document.getElementById('jobLastName').value.trim();
            const email = document.getElementById('jobEmail').value.trim();
            const phone = document.getElementById('jobPhone').value.trim();
            const position = document.getElementById('jobPosition').value;
            const experience = document.getElementById('jobExperience').value;
            const cvFile = document.getElementById('jobCV').files[0];
            const coverLetter = document.getElementById('jobCoverLetter').value.trim();
            const termsAccepted = document.getElementById('jobTerms').checked;
            
            if (!firstName || !lastName || !email || !phone || !position || !experience || !cvFile) {
                showJobMessage('❌ Please fill all required fields (*) and upload your CV.');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                showJobMessage('⚠️ Please enter a valid email address.');
                return;
            }
            
            if (phone.length < 10) {
                showJobMessage('⚠️ Please enter a valid phone number.');
                return;
            }
            
            const allowedExtensions = ['pdf', 'doc', 'docx'];
            const fileExtension = cvFile.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                showJobMessage('❌ Please upload a valid CV file (PDF, DOC, or DOCX).');
                return;
            }
            
            if (cvFile.size > 5 * 1024 * 1024) {
                showJobMessage('❌ File size must be less than 5MB.');
                return;
            }
            
            if (!termsAccepted) {
                showJobMessage('📜 You must agree to the Privacy Policy.');
                return;
            }
            
            // Save to localStorage
            const application = {
                applicationId: 'APP-' + Date.now(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                position: position,
                experience: experience,
                coverLetter: coverLetter || 'Not provided',
                fileName: cvFile.name,
                fileSize: cvFile.size,
                appliedAt: new Date().toISOString(),
                status: 'Pending Review'
            };
            
            let applications = JSON.parse(localStorage.getItem('job_applications') || '[]');
            applications.push(application);
            localStorage.setItem('job_applications', JSON.stringify(applications));
            
            // Close the modal
            closeJobModal();
            
            // Show success message
            showSuccessMessage(firstName, position);
            
            // Reset form
            jobForm.reset();
        });
    }
});
// ==================== VIEW DETAILS BUTTON FUNCTIONALITY ====================
// This script handles the expand/collapse functionality for job details on each card

document.addEventListener('DOMContentLoaded', function() {
    // Select all "View Details" buttons on the page
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    
    // Loop through each button and add click event listener
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the parent card container
            const card = this.closest('.card');
            
            // Find the details div within this card
            const detailsDiv = card.querySelector('.card-details');
            
            // Toggle the 'active' class on the details div
            if (detailsDiv) {
                detailsDiv.classList.toggle('active');
            }
            
            // Toggle the 'active' class on the button itself (changes styling and icon)
            this.classList.toggle('active');
            
            // Update button text based on state
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                // Change text to "Show Less" when expanded
                this.innerHTML = '<i class="bx bx-chevron-up"></i> Show Less';
                // Re-query the icon element after changing innerHTML
                const newIcon = this.querySelector('i');
                if (newIcon) newIcon.style.transform = 'rotate(0deg)';
            } else {
                // Change text back to "View Details" when collapsed
                this.innerHTML = '<i class="bx bx-chevron-down"></i> View Details';
            }
        });
    });
});