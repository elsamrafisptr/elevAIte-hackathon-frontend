export const Gender = Object.freeze({
  MALE: 'male',
  FEMALE: 'female'
})

export const PreventiveMeasureFrequency = Object.freeze({
  NEVER: 'never',
  RARELY: 'rarely',
  SOMETIMES: 'sometimes',
  OFTEN: 'often',
  ALWAYS: 'always'
})

export const GamblingFrequency = Object.freeze({
  RARELY: 'rarely',
  SOMETIMES: 'sometimes',
  OFTEN: 'often',
  ALWAYS: 'always',
  ADDICTIVE: 'addictive'
})

export const MembershipLevel = Object.freeze({
  BASIC: 'basic',
  PREMIUM: 'premium',
  HERO: 'hero'
})

export const MoodStatus = Object.freeze({
  HOPELESS: 'hopeless',
  DEPRESSED: 'depressed',
  NEUTRAL: 'neutral',
  MOTIVATED: 'motivated',
  EXCELLENT: 'excellent'
})

const onBoardingFormData = {
  question_1: [
    {
      value: Gender.MALE,
      title: 'Laki-Laki',
      description: 'Dapatkan notifikasi untuk semua pesan baru'
    },
    {
      value: Gender.FEMALE,
      title: 'Perempuan',
      description: 'Hanya pesan langsung dan mention'
    }
  ],

  question_2: [
    {
      value: PreventiveMeasureFrequency.NEVER,
      title: 'Tidak Pernah',
      description: 'Tidak mendapatkan notifikasi pencegahan'
    },
    {
      value: PreventiveMeasureFrequency.RARELY,
      title: 'Jarang',
      description: 'Hanya pencegahan penting'
    },
    {
      value: PreventiveMeasureFrequency.SOMETIMES,
      title: 'Kadang-Kadang',
      description: 'Campuran notifikasi'
    },
    {
      value: PreventiveMeasureFrequency.OFTEN,
      title: 'Sering',
      description: 'Mayoritas notifikasi pencegahan'
    },
    {
      value: PreventiveMeasureFrequency.ALWAYS,
      title: 'Selalu',
      description: 'Semua notifikasi pencegahan'
    }
  ],

  question_3: [
    {
      value: GamblingFrequency.RARELY,
      title: 'Jarang',
      description: 'Sedikit frekuensi berjudi'
    },
    {
      value: GamblingFrequency.SOMETIMES,
      title: 'Kadang-Kadang',
      description: 'Frekuensi sedang'
    },
    {
      value: GamblingFrequency.OFTEN,
      title: 'Sering',
      description: 'Sering berjudi'
    },
    {
      value: GamblingFrequency.ALWAYS,
      title: 'Selalu',
      description: 'Setiap saat'
    },
    {
      value: GamblingFrequency.ADDICTIVE,
      title: 'Kecanduan',
      description: 'Masalah perjudian'
    }
  ],

  question_4: [
    {
      value: MembershipLevel.BASIC,
      title: 'Basic',
      description: 'Keanggotaan dasar gratis'
    },
    {
      value: MembershipLevel.PREMIUM,
      title: 'Premium',
      description: 'Keanggotaan berbayar dengan fitur lebih'
    },
    {
      value: MembershipLevel.HERO,
      title: 'Hero',
      description: 'Keanggotaan tertinggi dengan VIP akses'
    }
  ],
  question_5: [
    {
      value: MoodStatus.HOPELESS,
      title: 'Gada Harapan',
      description: 'Merasa tanpa harapan'
    },
    {
      value: MoodStatus.DEPRESSED,
      title: 'Frustasi',
      description: 'Merasa sedih'
    },
    {
      value: MoodStatus.NEUTRAL,
      title: 'Biasa',
      description: 'Biasa saja'
    },
    {
      value: MoodStatus.MOTIVATED,
      title: 'Termotivasi',
      description: 'Bersemangat'
    },
    {
      value: MoodStatus.EXCELLENT,
      title: 'Sangat Baik',
      description: 'Sangat baik!'
    }
  ]
}

export default onBoardingFormData
