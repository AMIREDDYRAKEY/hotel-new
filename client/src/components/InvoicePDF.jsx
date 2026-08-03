import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#d4a853',
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: 'column',
  },
  logoText: {
    fontSize: 24,
    color: '#d4a853',
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  headerInfo: {
    alignItems: 'flex-end',
  },
  invoiceTitle: {
    fontSize: 32,
    color: '#1c1917',
    fontFamily: 'Helvetica-Bold',
  },
  invoiceId: {
    fontSize: 10,
    color: '#78716c',
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 9,
    color: '#78716c',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  value: {
    fontSize: 12,
    color: '#1c1917',
    fontFamily: 'Helvetica-Bold',
  },
  table: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e5e4',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f4',
  },
  col1: { width: '50%' },
  col2: { width: '25%', textAlign: 'center' },
  col3: { width: '25%', textAlign: 'right' },
  tableColHeader: {
    fontSize: 10,
    color: '#78716c',
    textTransform: 'uppercase',
  },
  tableCell: {
    fontSize: 11,
    color: '#1c1917',
  },
  summaryContainer: {
    marginTop: 40,
    alignItems: 'flex-end',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 11,
    color: '#78716c',
  },
  summaryValue: {
    fontSize: 11,
    color: '#1c1917',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#d4a853',
  },
  totalLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#1c1917',
  },
  totalValue: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#d4a853',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e7e5e4',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 9,
    color: '#a8a29e',
    marginBottom: 4,
  },
  stamp: {
    position: 'absolute',
    top: 300,
    left: 200,
    opacity: 0.1,
    transform: 'rotate(-30deg)',
  },
  stampText: {
    fontSize: 80,
    fontFamily: 'Helvetica-Bold',
  }
});

// Helper for consistent fake price
const getInvoicePrice = (roomName) => {
  let hash = 0;
  for (let i = 0; i < roomName.length; i++) {
    hash = roomName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const price = 250 + (Math.abs(hash) % 800);
  return price.toFixed(2);
};

export const InvoicePDF = ({ booking }) => {
  const price = getInvoicePrice(booking.room);
  const tax = (price * 0.1).toFixed(2);
  const subtotal = (price - tax).toFixed(2);
  
  const isVoid = booking.status === 'Cancelled';
  const isPending = booking.status === 'Pending';
  
  let stampText = '';
  let stampColor = '#d4a853';
  if (isVoid) {
    stampText = 'VOIDED';
    stampColor = '#f43f5e';
  } else if (!isPending) {
    stampText = 'PAID';
    stampColor = '#10b981';
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Majestic Hotel</Text>
            <Text style={{ fontSize: 9, color: '#78716c', marginTop: 4 }}>123 Luxury Avenue</Text>
            <Text style={{ fontSize: 9, color: '#78716c' }}>Paradise City, PC 90210</Text>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.invoiceId}>INV-{booking._id.substring(0, 8).toUpperCase()}</Text>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Bill To:</Text>
            <Text style={styles.value}>{booking.name}</Text>
            <Text style={{ fontSize: 10, color: '#78716c', marginTop: 2 }}>Guest Account</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Date Issued:</Text>
            <Text style={styles.value}>{booking.date.split(' ')[0]}</Text>
            <Text style={[styles.label, { marginTop: 10 }]}>Booking Status:</Text>
            <Text style={styles.value}>{booking.status}</Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.col1, styles.tableColHeader]}>Description</Text>
            <Text style={[styles.col2, styles.tableColHeader]}>Date</Text>
            <Text style={[styles.col3, styles.tableColHeader]}>Amount</Text>
          </View>
          
          <View style={styles.tableRow}>
            <View style={styles.col1}>
              <Text style={styles.tableCell}>{booking.room}</Text>
              <Text style={{ fontSize: 9, color: '#78716c', marginTop: 2 }}>Accommodation Charge</Text>
            </View>
            <Text style={[styles.col2, styles.tableCell]}>{booking.date}</Text>
            <Text style={[styles.col3, styles.tableCell]}>${subtotal}</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax (10%)</Text>
            <Text style={styles.summaryValue}>${tax}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Due</Text>
            <Text style={styles.totalValue}>${price}</Text>
          </View>
        </View>

        {/* Background Stamp */}
        {stampText && (
          <View style={styles.stamp}>
            <Text style={[styles.stampText, { color: stampColor }]}>{stampText}</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Thank you for choosing Majestic Hotel for your stay.</Text>
          <Text style={styles.footerText}>For any billing inquiries, please contact billing@majestichotel.com</Text>
        </View>
      </Page>
    </Document>
  );
};
