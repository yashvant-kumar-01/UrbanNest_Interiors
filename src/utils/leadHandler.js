// UrbanNest Interiors - Multi-Channel Lead Processor
// Handles: 1. Local Database Storage & CSV Export | 2. Web3Forms / Email Notification | 3. WhatsApp Direct Chat Redirect

export function processLeadSubmission(formData, refId) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const leadEntry = {
    refId: refId || 'UNI-' + Math.floor(100000 + Math.random() * 900000),
    timestamp,
    name: formData.name || '',
    phone: formData.phone || '',
    email: formData.email || '',
    location: formData.location || 'Ahmedabad',
    propertyType: formData.propertyType || '',
    propertySize: formData.propertySize || '',
    preferredService: formData.preferredService || formData.service || '',
    estimatedBudget: formData.estimatedBudget || '',
    projectDescription: formData.projectDescription || formData.message || ''
  };

  // 1. SAVE TO LOCAL STORAGE (Browser Lead Database)
  try {
    const existingLeads = JSON.parse(localStorage.getItem('urbannest_leads') || '[]');
    existingLeads.unshift(leadEntry);
    localStorage.setItem('urbannest_leads', JSON.stringify(existingLeads));
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }

  // 2. SEND TO EMAIL VIA WEB3FORMS API (Free Instant Email Service)
  try {
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '56453965-067d-419b-aef7-1a0694709f7a', // Web3Forms Public Access Key for hello@urbannestinteriors.com
        subject: `New Interior Inquiry from ${leadEntry.name} (${leadEntry.location})`,
        from_name: 'UrbanNest Interiors Web Portal',
        name: leadEntry.name,
        phone: leadEntry.phone,
        email: leadEntry.email,
        location: leadEntry.location,
        property_type: leadEntry.propertyType,
        budget: leadEntry.estimatedBudget,
        service: leadEntry.preferredService,
        message: leadEntry.projectDescription,
        ref_id: leadEntry.refId
      })
    }).catch(err => console.warn('Email Dispatch Exception:', err));
  } catch (e) {
    console.warn('Web3Forms dispatch skip:', e);
  }

  // 3. GENERATE WHATSAPP DIRECT DEEP LINK
  const whatsappText = `🏡 *New Interior Design Inquiry*
*UrbanNest Interiors - Ahmedabad*

📌 *Ref ID:* ${leadEntry.refId}
👤 *Name:* ${leadEntry.name}
📞 *Phone:* ${leadEntry.phone}
✉️ *Email:* ${leadEntry.email}
📍 *Location:* ${leadEntry.location}
🏠 *Property:* ${leadEntry.propertyType} ${leadEntry.propertySize ? '(' + leadEntry.propertySize + ')' : ''}
💰 *Budget:* ${leadEntry.estimatedBudget}
🛠️ *Service:* ${leadEntry.preferredService}
${leadEntry.projectDescription ? '💬 *Details:* ' + leadEntry.projectDescription : ''}`;

  const encodedMsg = encodeURIComponent(whatsappText);
  const whatsappUrl = `https://wa.me/919879543210?text=${encodedMsg}`;

  return {
    leadEntry,
    whatsappUrl
  };
}

// Function to retrieve all saved leads from browser database
export function getSavedLeads() {
  try {
    return JSON.parse(localStorage.getItem('urbannest_leads') || '[]');
  } catch (e) {
    return [];
  }
}

// Function to export leads as a downloadable CSV file
export function exportLeadsToCSV() {
  const leads = getSavedLeads();
  if (leads.length === 0) return false;

  const headers = ['Ref ID', 'Timestamp', 'Name', 'Phone', 'Email', 'Location', 'Property Type', 'Budget', 'Service', 'Message'];
  const rows = leads.map(l => [
    `"${l.refId}"`,
    `"${l.timestamp}"`,
    `"${l.name}"`,
    `"${l.phone}"`,
    `"${l.email}"`,
    `"${l.location}"`,
    `"${l.propertyType}"`,
    `"${l.estimatedBudget}"`,
    `"${l.preferredService}"`,
    `"${(l.projectDescription || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `urbannest_customer_leads_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
}
