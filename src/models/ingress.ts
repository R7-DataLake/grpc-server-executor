import getConnection from "../db/connection"

export class IngressModel {

  async savePerson(data: any) {
    const db = await getConnection()
    return db('person')
      .insert(data)
      .onConflict(['hospcode', 'hn'])
      .merge()
  }

  async saveOpd(data: any) {
    const db = await getConnection()
    return db('opd')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'date_serv', 'seq'])
      .merge()
  }

  async saveChronic(data: any) {
    const db = await getConnection()
    return db('chronic')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'chronic'])
      .merge()
  }

  async saveOpdx(data: any) {
    const db = await getConnection()
    return db('opdx')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'seq', 'diag'])
      .merge()
  }

  async saveOpop(data: any) {
    const db = await getConnection()
    return db('opop')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'seq', 'oper'])
      .merge()
  }

  async saveIpd(data: any) {
    const db = await getConnection()
    return db('ipd')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'an'])
      .merge()
  }

  async saveIpdx(data: any) {
    const db = await getConnection()
    return db('ipdx')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'an', 'diag'])
      .merge()
  }

  async saveIpop(data: any) {
    const db = await getConnection()
    return db('ipop')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'an', 'oper'])
      .merge()
  }

  async saveDrug(data: any) {
    const db = await getConnection()
    return db('drug')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'an', 'did'])
      .merge()
  }

  async saveLab(data: any) {
    const db = await getConnection()
    return db('lab')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'seq', 'labtest'])
      .merge()
  }

  async saveAppoint(data: any) {
    const db = await getConnection()
    return db('appoint')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'appoint_date', 'clinic'])
      .merge()
  }

  async saveDrugallergy(data: any) {
    const db = await getConnection()
    return db('drugallergy')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'dname'])
      .merge()
  }

}